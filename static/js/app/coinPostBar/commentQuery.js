$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
        title: '评论内容',
        field: 'content',
	},{
		title: '类型',
		field: 'type',
        type: 'select',
        key: 'interact_objecttype',
        formatter: Dict.getNameForList('interact_objecttype'),
        search:true,
	},{
		title: '评论人',
		field: 'nickname',
	},{
		title: '评论时间',
		field: 'commentDatetime',
    	formatter: dateTimeFormat,
        field1: 'commentDateStart',
        title1: '评论时间',
        type: 'date',
        field2: 'commentDateEnd',
        twoDate: true,
        search: true
	}, {
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'post_comment_status',
        formatter: Dict.getNameForList('post_comment_status'),
        search: true
	}];
	buildList({
		columns: columns,
		pageCode: '628287',
	});
	
	$('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "./comment_addedit.html?v=1&code=" + selRecords[0].code+"&type="+selRecords[0].type+"&isTop="+selRecords[0].isTop;
	})
	
});