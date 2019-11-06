$(function() {
    var view = getQueryString('v');
    var isCheck = getQueryString('isCheck');
    var code = getQueryString('code');
    var isResult = true;

    var fields = [{
        title: '提交人昵称',
        field: 'commitUser',
        formatter: (v, d) => {
            return d.commitUserInfo ? d.commitUserInfo.nickname : '';
        },
        readonly: isCheck
    }, {
        title: '提交人手机号',
        field: 'commitUserMobile',
        formatter: (v, d) => {
            return d.commitUserInfo ? d.commitUserInfo.mobile : '';
        },
        readonly: isCheck
    }, {
        title: '所在端',
        field: 'deviceSystem',
        readonly: isCheck
    }, {
        title: 'Bug描述',
        field: 'description',
        readonly: isCheck
    }, {
        title: '截图',
        type: 'img',
        field: 'pic',
        readonly: isCheck
    }, {
        title: '提交时间',
        field: 'commitDatetime',
        type: 'datetime',
        formatter: dateTimeFormat,
        readonly: isCheck
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
        readonly: isCheck
    }, {
        title: '审批说明',
        field: 'approveNote',
        readonly: !isCheck,
        required: true
    }, {
        title: '复现结果',
        field: 'approveResult',
        readonly: !isCheck,
        required: true,
        type: 'select',
        data: {
            '1': '复现成功',
            '0': '复现不成功'
        },
        onChange(v) {
            if(v) {
                isResult = v === '0';
                const nextLiAll = $($('#approveResult_chosen').parent()[0]).nextAll('.clearfix');
                const lastEle = $($('#approveResult_chosen').parent()[0]).nextAll('.clearfix').last();
                if(!isResult) {
                    $(nextLiAll).each((index, item) => {
                        $(item).css('height', '34px').show();
                    });
                }else {
                    $(nextLiAll).each((index, item) => {
                        $(item).hide();
                    });
                    $(lastEle).show();
                }
            }
        }
    }, {
        field: 'level',
        title: '严重等级',
        required: true,
        type: 'select',
        key: 'bug_level',
        hidden: isResult,
        readonly: !isCheck
    }, {
        field: 'repairVersionCode',
        title: '修复版本号',
        required: true,
        maxlength: 30,
        hidden: isResult,
        readonly: !isCheck
    }, {
        title: '备注',
        field: 'commitNote',
        readonly: isCheck
    }];
    
    buildDetail({
        fields: fields,
        code: code,
        detailCode: '805106',
        editCode: '805101',
        view: view,
        beforeSubmit(params) {
            params.approveUser = getUserId();
            return params;
        }
    });
});