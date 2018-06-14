$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '名称',
        search: true
    }, {
        field: 'location',
        title: '位置',
        search: true
    }, {
        field: 'orderNo',
        title: '排序'
    }, {
        field: 'avgChange',
        title: '平均涨幅度',
    }, {
        field: 'bestChange',
        title: '最佳涨幅度',
    }, {
        field: 'worstChange',
        title: '最差涨幅度',
    }, {
        field: 'bestSymbol',
        title: '最佳币种符号',
    }, {
        field: 'worstSymbol',
        title: '最差币种符号',
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'symbol_plate_status',
        formatter: Dict.getNameForList('symbol_plate_status'),
        search: true
    }, {
        field: 'createDatetime',
        title: '创建时间',
        formatter: dateTimeFormat
    }, {
        field: 'updateDatetime',
        title: '更新时间',
        formatter: dateTimeFormat
    }, {
        field: 'updater',
        title: '更新人'
    }, {
        field: 'remark',
        title: '备注',
    }];
    buildList({
        columns: columns,
        pageCode: '628610',
        searchParams: {
            statusList: ['0', '1']
        },
        deleteCode: '628601',
        beforeDetail: function(data) {
            window.location.href = "currencyPlate_detail.html?v=1&code=" + data.code;
        }
    });

    //上架
    $('#upBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == '1') {
            toastr.info("版块已上架！");
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
                field: 'remark',
                title: '备注'
			}],
            buttons: [{
                title: '确定',
                handler: function() {
                	if($('#popForm').valid()){
                        var data = $('#popForm').serializeObject();
                        data.code = selRecords[0].code;
                        data.updater = getUserName();
                        
                        reqApi({
                            code: '628603',
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
        if (selRecords[0].status == '1') {
            var dw = dialog({
                content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                    '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">下架</li></ul>' +
                    '</form>'
            });
    
            dw.showModal();
    
            buildDetail({
                container: $('#formContainer'),
                fields: [{
                    field: 'remark',
                    title: '备注'
                }],
                buttons: [{
                    title: '确定',
                    handler: function() {
                        if($('#popForm').valid()){
                            var data = $('#popForm').serializeObject();
                            data.code = selRecords[0].code;
                            data.updater = getUserName();
                            
                            reqApi({
                                code: '628604',
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
        } else {
            toastr.info('版块不能下架！');
        }
        
        
        
    });
});