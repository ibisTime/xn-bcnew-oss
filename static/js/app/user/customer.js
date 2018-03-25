$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'mobile',
        title: '手机号',
        search: true
    }, {
        field: 'nickname',
        title: '昵称',
    }, {
        field: 'birthday',
        title: '生日',
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'user_status',
        formatter: Dict.getNameForList('user_status'),
        search: true
    },{
        field: 'createDatetime',
        title: '注册时间',
        formatter: dateTimeFormat,
        field1: 'createDatetimeStart',
        title1: '注册时间',
        type1: 'date',
        field2: 'createDatetimeEnd',
        type2: 'date',
        twoDate: true,
        search: true,
    }, {
        field: 'remark',
        title: '备注',
    }];
    buildList({
        router: 'customer',
        columns: columns,
        pageCode: '805120',
        searchParams: {
            kind: 'C',
            companyCode: OSS.company
        },
        beforeDetail: function(data) {
            window.location.href = "customer_addedit.html?v=1&userId=" + data.userId;
        }
    });
    
    //激活
    $('#activeBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == 0) {
            toastr.info("已激活");
            return;
        }
        confirm("确定激活？").then(function() {
            reqApi({
                code: '805091',
                json: {
                    userId: selRecords[0].userId,
                    toStatus: '0',
                    remark: selRecords[0].remark
                }
            }).then(function() {
                sucList();
            });

        }, function() {})
    });

    //禁止登陆
    $('#rockBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        if (selRecords[0].status == 2) {
            toastr.info("已注销");
            return;
        }

        confirm("确定注销？").then(function() {
            reqApi({
                code: '805091',
                json: {
                    userId: selRecords[0].userId,
                    toStatus: '2',
                    remark: selRecords[0].remark
                }
            }).then(function() {
                sucList();
            });

        }, function() {})
    });
	
	
	//添加备注
    $('#remarkBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        var dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">添加备注</li></ul>' +
                '</form>'
        });

        dw.showModal();

        buildDetail({
            container: $('#formContainer'),
            fields: [{
                field: 'remark1',
                title: '添加备注',
                value: selRecords[0].remark||"",
				required: true,
                maxlength: 250
            }],
            buttons: [{
                title: '添加备注',
                handler: function() {
                	if($('#popForm').valid()){
                        var data = $('#popForm').serializeObject();
                        data.remark = data.remark1;
                        delete data.remark1;
                        data.userId = selRecords[0].userId;
                        reqApi({
                            code: '805082',
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