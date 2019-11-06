$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        title: '提交人昵称',
        field: 'commitUser',
        formatter: (v, d) => {
            return d.commitUserInfo ? d.commitUserInfo.nickname : '';
        },
        search: true
    }, {
        title: '提交人手机号',
        field: 'commitUserMobile',
        formatter: (v, d) => {
            return d.commitUserInfo ? d.commitUserInfo.mobile : '';
        }
    }, {
        title: '所在端',
        field: 'deviceSystem',
        search: true
    }, {
        title: '严重等级',
        search: true,
        type: 'select',
        key: 'bug_level',
        field: 'level'
    }, {
        title: '状态',
        type: 'select',
        field: 'status',
        data: {
            '0': '待审核',
            '1': '处理中',
            '2': '复现不成功',
            '3': '已处理'
        },
        search: true
    }, {
        title: '更新时间',
        field: 'commitDatetime',
        type: 'datetime',
        formatter: dateTimeFormat
    }, {
        title: '备注',
        field: 'commitNote'
    }];


    buildList({
        columns: columns,
        pageCode: '805105'
    });
    
    $('#checkPointBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }else if(selRecords.length > 1) {
            toastr.info("请选择一条记录");
            return;
        }else if(selRecords[0].status !== '0') {
            toastr.info("不是可以审核的状态");
            return;
        }
        window.location.href = `pointpostion_addedit.html?code=${selRecords[0].code}&isCheck=1`;
    });
    $('#xfokBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }else if(selRecords.length > 1) {
            toastr.info("请选择一条记录");
            return;
        }else if(selRecords[0].status !== '1') {
            toastr.info("不是可以修复完成的状态");
            return;
        }
        confirm('修复完成').then(function() {
            reqApi({
                code: '805102',
                json: {
                    code: selRecords[0].code,
                    amount: 0,
                    payUser: getUserId()
                }
            }).then(function() {
                sucList();
            });
        }, function() {})
    });
    $('#detailBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }else if(selRecords.length > 1) {
            toastr.info("请选择一条记录");
            return;
        }
        window.location.href = `pointpostion_detail.html?code=${selRecords[0].code}&v=1`;
    });
})