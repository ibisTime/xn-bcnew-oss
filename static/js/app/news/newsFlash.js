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
		title: '类型',
		field: 'type',
        type: 'select',
        data:{
        	"0":"普通",
        	"1":"热门"
        },
        search: true,
	},{
		title: '来源',
		field: 'source',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'flash_status',
        formatter: Dict.getNameForList('flash_status'),
        search: true
	},{
        title: '显示时间',
        field: 'showDatetime',
        formatter: dateTimeFormat,
        field1: 'showDatetimeStart',
        title1: '显示时间',
        type: 'date',
        field2: 'showDatetimeEnd',
        twoDate: true,
        search: true
	}];
	buildList({
		columns: columns,
		pageCode: '628095'
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
        
        window.location.href = "./newsFlash_addedit.html?code=" + selRecords[0].code;
	})
	
	
	$('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "./newsFlash_detail.html?code=" + selRecords[0].code;
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
        window.location.href = "./newsFlash_up.html?code=" + selRecords[0].code;
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
	            code: '628093',
	            json: {
	                code: selRecords[0].code,
	            }
	        }).then(function() {
	            sucList();
	        });
        }, function() {})
    });
    
});