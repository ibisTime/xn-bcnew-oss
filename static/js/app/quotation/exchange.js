$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '交易所英文名',
		field: 'ename',
        search: true
	},{
		title: '交易所中文名',
		field: 'cname',
	},{
		title: "状态",
        field: "status",
        type:'select',
        data:{
        	'0':'待上架',
        	'1':'已上架'
        },
        search: true
    }, {
        title: "位置",
        field: "location",
        type:'select',
        data:{
        	'0':'普通',
        	'1':'热门'
        },
        search: true
    }, {
        title: "序号",
        field: "orderNo",
        required: true,
	}];
	buildList({
		columns: columns,
		pageCode: '628315'
	});
	
    //修改
    $('#editBtn').off("click").click(function(){
    	var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
    	window.location.href = "./exchange_addedit.html?id=" + selRecords[0].id;
    })
    
    //详情
    $('#detailBtn').off("click").click(function(){
    	var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
    	window.location.href = "./exchange_addedit.html?v=1&id=" + selRecords[0].id;
    })
	
	//交易对查询
    $('#JYDQueryBtn').off("click").click(function(){
    	var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
    	window.location.href = "./exchange_JYD.html?exchangeEname=" + selRecords[0].ename;
    })
	
});