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
		title: '币种',
		field: 'toCoin',
		type: 'select',
		listCode:'628307',
        keyName: 'symbol',
        valueName: '{{cname.DATA}}({{symbol.DATA}})',
        search:true
	},{
		title: '关注数',
		field: 'keepCount',
	},{
		title: '发帖数',
		field: 'postCount',
	},{
		title: '今日跟帖数',
		field: 'dayCommentCount',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
		data:{
			"0":"待上架",
			"1":"已上架"
		},
        search: true
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
		title: '更新人',
		field: 'updater',
	},  {
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat
	}];
	buildList({
		columns: columns,
		pageCode: '628235'
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
        
        window.location.href = "./moudle_addedit.html?code=" + selRecords[0].code;
	})
	
	$('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "./moudle_detail.html?code=" + selRecords[0].code;
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
        
        var dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">上架</li></ul>' +
                '</form>'
        });

        dw.showModal();

        buildDetail({
            container: $('#formContainer'),
            fields: [{
                field: 'toCoin1',
                title: '币种',
                type: 'select',
				listCode:'628307',
		        keyName: 'symbol',
		        valueName: '{{cname.DATA}}({{symbol.DATA}})',
				value: selRecords[0].toCoin || '',
			}, {
                field: 'location1',
                title: '位置',
				type: 'select',
				data:{
					"0":"普通",
					"1":"热门"
				},
				value: selRecords[0].location || '0',
				required: true,
            }],
            buttons: [{
                title: '上架',
                handler: function() {
                	if($('#popForm').valid()){
                        var data = $('#popForm').serializeObject();
                        data.code = selRecords[0].code;
                        data.toCoin = data.toCoin1;
                        data.location = data.location1;
                        delete data.toCoin1;
                        delete data.location1;
                        
                        reqApi({
                            code: '628232',
                            json: data
                        }).done(function(data) {
                        	sucList();
                            dw.close().remove();
                        });
                    }

                }
            }, {
                title: '取消',
                handler: function() {
                    dw.close().remove();
                }
            }]
        });

        dw.__center();
        
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
            code: '628233',
            json: {
                code: selRecords[0].code,
            }
        }).then(function() {
            sucList();
        });
        }, function() {})
    });
    
    
});