$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '内容',
		field: 'content',
        formatter: function(v, data){
        	var description = v;
        	if(description.length>50){
				description = description.substring(0,50)+"...";
        	}
        	return description;
        }
	},{
		title: '发帖人',
		field: 'mobile',
		formatter: function(v, data){
			return data.mobile+"("+data.nickname+")";
		}
	},{
		title: '板块名称',
		field: 'plateName',
	},{
		title: '板块名称',
		field: 'plateCode',
        type: 'select',
		pageCode:'628235',
        keyName: 'code',
        valueName: '{{name.DATA}}',
        searchName: 'code',
        search:true,
        visible: false
	},{
		title: '评论个数',
		field: 'commentCount',
	},{
		title: '点赞个数',
		field: 'pointCount',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'post_comment_status',
        formatter: Dict.getNameForList('post_comment_status'),
	}, {
		title: '位置',
		field: 'location',
		type: 'select',
		data:{
			"0":"普通",
			"1":"热门"
		},
        search: true
	},  {
        title: '发布时间',
        field: 'publishDatetime',
        formatter: dateTimeFormat,
        field1: 'publishDatetimeStart',
        title1: '发布时间',
        type: 'date',
        field2: 'publishDatetimeEnd',
        twoDate: true,
        search: true
	}];
	buildList({
		columns: columns,
		pageCode: '628660',
        searchParams: {
        	status: 'A'
        }
	});
	
    //审查
    $('#examineBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != 'A') {
            toastr.info("不是可审查的状态！");
            return;
        }
        
        window.location.href = "./postBar_addedit.html?code=" + selRecords[0].code;

    });
    
    $('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "./postBarQuery_addedit.html?v=1&code=" + selRecords[0].code;
	})
    
    
});