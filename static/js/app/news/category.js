$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '名称',
		field: 'name',
        search:true
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'category_status',
        formatter: Dict.getNameForList('category_status'),
        search: true
	}, {
		title: '顺序',
		field: 'orderNo',
	},  {
		title: '更新人',
		field: 'updater',
	},  {
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat
	}];
	buildList({
		columns: columns,
		pageCode: '628005'
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
        
        window.location.href = "./category_addedit.html?code=" + selRecords[0].code;
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
        confirm("确定上架？").then(function() {
			upDown(selRecords[0].code)
        }, function() {})
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
			upDown(selRecords[0].code)
        }, function() {})
    });
    
    
	//上架下架
	function upDown(code){
		reqApi({
            code: '628002',
            json: {
                code: code,
            }
        }).then(function() {
            sucList();
        });
	}
});