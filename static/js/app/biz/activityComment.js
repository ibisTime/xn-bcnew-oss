$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
        title: '评论内容',
        field: 'content',
        search:true,
	},{
		title: '类型',
		field: 'type',
        type: 'select',
        data:{
        	"5":"评论活动",
        	"6":"评论活动评论"
        },
        search:true,
	},{
		title: '评论人',
		field: 'nickname',
	},{
		title: '针对内容',
		field: 'parentContent',
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
	}];
	buildList({
		columns: columns,
		pageCode: '628287',
        searchParams: {
        	status: 'A',
    		type:"act"
        }
	});
	
	$('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "../coinPostBar/comment_addedit.html?v=1&code=" + selRecords[0].code+"&type="+selRecords[0].type+"&isTop="+selRecords[0].isTop;
	})
	
    //审查
    $('#chooseBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != 'A') {
            toastr.info("不是可审查的状态！");
            return;
        }
        
        window.location.href = "../coinPostBar/comment_addedit.html?code=" + selRecords[0].code+"&type="+selRecords[0].type+"&isTop="+selRecords[0].isTop;

    });
    
    
});