$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '交易所英文名',
		field: 'exchangeEname',
        search: true
	},{
		title: '交易所中文名',
		field: 'exchangeCname',
	},{
		title: '币种',
		field: 'coin',
        search: true
	},{
		title: '参考币种',
		field: 'toCoin',
        search: true
	},{
		
		title: '位置',
		field: 'location',
		type: 'select',
		data:{
			"0":"普通",
			"1":"热门"
		},
        search: true
	}];
	buildList({
		columns: columns,
		pageCode: '628325'
	});
	
	
	//设置位置
    $('#setLocationBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">设置位置</li></ul>' +
                '</form>'
        });

        dw.showModal();

        buildDetail({
            container: $('#formContainer'),
            fields: [{
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
                title: '设置',
                handler: function() {
                	if($('#popForm').valid()){
                        var data = $('#popForm').serializeObject();
                        data.id = selRecords[0].id;
                        data.location = data.location1;
                        delete data.location1;
                        
                        reqApi({
                            code: '628320',
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
});