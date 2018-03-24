$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
            field: 'code1',
            title: '编号',
            readonly: true,
            formatter: function(v, data) {
                return data.code
            }
        }, {
            field: 'accountName',
            title: '户名',
            readonly: true
        }, {
            field: 'currency',
            title: '币种',
            type: 'select',
            key: 'currency',

            formatter: Dict.getNameForList("currency"),
            readonly: true
        }, {
            field: 'direction',
            title: '方向',
            type: 'select',
            data: {
                '0': '红冲',
                '1': '蓝补'
            },
            readonly: true
        }, {
            field: 'amount',
            title: '金额',
            formatter: moneyFormat,
            readonly: true
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'hl_status',
            formatter: Dict.getNameForList('hl_status'),
            readonly: true
        }, {
            field: 'applyUser',
            title: '申请人',
            readonly: true
        }, {
            field: 'applyDatetime',
            title: '申请时间',
            formatter: dateTimeFormat,
            readonly: true
        }, {
            field: 'jourList',
            title: '流水明细:',
            readonly: true,
            type: 'o2m',
            columns: [{
                field: 'code',
                title: '流水号',
                formatter: function(v, data) {
                    return data.code
                }
            }, {
                field: 'realName',
                title: '户名',
                formatter: function(v, data) {
                    return data.realName
                }
            }, {
                field: 'currency',
                title: '币种',
                key: 'currency',
                formatter: Dict.getNameForList('currency'),
            }, {
                field: 'channelType',
                title: '渠道',
                type: 'select',
                key: 'channel_type',
                formatter: Dict.getNameForList('channel_type'),
                search: true
            }, {
                field: 'bizType',
                title: '业务类型',
                type: 'select',
                key: 'biz_type',
                formatter: Dict.getNameForList('biz_type'),
                search: true
            }, {
                field: 'transAmount',
                title: '变动金额',
                formatter: moneyFormat
            }, {
                field: 'preAmount',
                title: '变动前金额',
                formatter: moneyFormat
            }, {
                field: 'postAmount',
                title: '变动后金额',
                formatter: moneyFormat
            }, {
                field: 'status',
                title: '状态',
                type: 'select',
                key: 'jour_status',
                formatter: Dict.getNameForList('jour_status'),
                search: true
            }, {
                field: 'createDatetime',
                title: '创建时间',
                formatter: dateTimeFormat
            }]
        },
        {
            field: 'approveUser',
            title: '审核人',
            readonly: true
        },
        {
            field: 'approveDatetime',
            title: '审核时间',
            formatter: dateTimeFormat,
            readonly: true
        },
        {
            title: '意见说明',
            field: 'approveNote',
            readonly: true
        }
    ];

    var options = {
        fields: fields,
        code: code,
        view: view,
        detailCode: '802806'
    };

    buildDetail(options);
});