$(function() {
    var view = getQueryString('v');
    var code = getQueryString('code');

    var fields = [{
        title: '提交人昵称',
        field: 'commitUser',
        formatter: (v, d) => {
            return d.commitUserInfo ? d.commitUserInfo.nickname : '';
        }
    }, {
        title: '提交人手机号',
        field: 'commitUserMobile',
        formatter: (v, d) => {
            return d.commitUserInfo ? d.commitUserInfo.mobile : '';
        }
    }, {
        title: '所在端',
        field: 'deviceSystem'
    }, {
        title: 'Bug描述',
        field: 'description'
    }, {
        title: '截图',
        type: 'img',
        field: 'pic'
    }, {
        title: '提交时间',
        field: 'commitDatetime',
        type: 'datetime',
        formatter: dateTimeFormat
    }, {
        title: '状态',
        type: 'select',
        field: 'status',
        data: {
            '0': '待审核',
            '1': '处理中',
            '2': '复现不成功',
            '3': '已处理'
        }
    }, {
        field: 'level',
        title: '严重等级',
        required: true,
        type: 'select',
        key: 'bug_level'
    }, {
        field: 'repairVersionCode',
        title: '修复版本号',
        required: true,
        maxlength: 30
    }, {
        title: '审批说明',
        field: 'approveNote'
    }, {
        title: '备注',
        field: 'commitNote'
    }];
    
    buildDetail({
        fields: fields,
        code: code,
        detailCode: '805106',
        view: view
    });
});