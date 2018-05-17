$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: "英文名称",
        field: "ename"
    }, {
        title: "中文名称",
        field: "cname"
    }, {
        title: "符号",
        field: "symbol",
        search: true
    }, {
        title: "总发行量",
        field: "maxSupply",
    }, {
        title: "流通量",
        field: "totalSupply",
    }, {
        title: "流通值",
        field: "totalSupplyMarket",
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
    }];
    buildList({
        columns: columns,
        pageCode: '628305',
    });
    
    //修改
    $('#editBtn').off("click").click(function(){
    	var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
    	window.location.href = "./coin_addedit.html?id=" + selRecords[0].id;
    })
    
    //详情
    $('#detailBtn').off("click").click(function(){
    	var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
    	window.location.href = "./coin_addedit.html?v=1&isDetail=1&id=" + selRecords[0].id;
    })
});