$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '标题',
		field: 'title',
        search:true
	},{
		title: '类型',
		field: 'type',
        type: 'select',
		pageCode:'628005',
        keyName: 'code',
        valueName: 'name',
        search:true,
        formatter: function(v,data){
        	return data.typeName
        }
	},{
		title: '币吧',
		field: 'toCoin',
        type: 'select',
		pageCode:'628235',
        keyName: 'code',
        valueName: 'name',
        search:true,
        formatter: function(v,data){
        	return data.toCoinName
        }
	},{
		title: '来源',
		field: 'source',
        search:true
	},{
		title: '作者',
		field: 'auther',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'news_status',
        formatter: Dict.getNameForList('news_status'),
        search: true
	},{
		title: '拥有者类型',
		field: 'ownerType',
        type: 'select',
        key: 'owner_type',
        formatter: Dict.getNameForList('owner_type'),
        search: true
	},{
        title: '发布时间',
        field: 'showDatetime',
        formatter: dateTimeFormat,
	},{
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat,
        field1: 'startDateStart',
        title1: '更新时间',
        type: 'date',
        field2: 'endDateEnd',
        twoDate: true,
        search: true
	},{
		title: '是否置顶',
		field: 'isTop',
		type: 'select',
		data:{
			'0':'否',
			'1':'是'
		},
	}];
	buildList({
		columns: columns,
		pageCode: '628195'
	});
	
	$('#editBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        if (selRecords[0].status == '1') {
            toastr.info("已上架不可修改！");
            return;
        }
        
        window.location.href = "./news_addedit.html?code=" + selRecords[0].code;
	})
	
	
	$('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "./news_detail.html?code=" + selRecords[0].code;
	})
	
    //上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == '1') {
            toastr.info("分类已上架！");
            return;
        }
        window.location.href = "./news_up.html?code=" + selRecords[0].code;
    });

    //下架
    $('#downBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status != '1') {
            toastr.info("未上架或已下架！");
            return;
        }

        confirm("确定下架？").then(function() {
			reqApi({
	            code: '628193',
	            json: {
	                code: selRecords[0].code,
	            }
	        }).then(function() {
	            sucList();
	        });
        }, function() {})
    });
    
    //置顶/取消置顶
    $('#setIsTopBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        var msg = selRecords[0].isTop=='0'?"确定置顶？":"确定取消置顶？"

        confirm(msg).then(function() {
			reqApi({
	            code: '628199',
	            json: {
	                code: selRecords[0].code,
	            }
	        }).then(function() {
	            sucList();
	        });
        }, function() {})
    });
    
    
});