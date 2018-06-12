$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'name',
        title: '名称',
        required: true
    }, {
        field: "description",
        title: "介绍",
        required: 'true'
    }, {
        field: 'location',
        title: '所在位置',
        type: 'select',
        key: 'symbol_plate_location',
        formatter: Dict.getNameForList('symbol_plate_location'),
        required: true
    }, {
        field: 'orderNo',
        title: '序号'
    }, {
        field: 'avgChange',
        title: '平均涨幅度',
        readonly: view
    }, {
        field: 'bestChange',
        title: '最佳涨幅度',
        readonly: view
    }, {
        field: 'worstChange',
        title: '最差涨幅度',
        readonly: view
    }, {
        field: 'bestSymbol',
        title: '最佳币种符号',
        readonly: view
    }, {
        field: 'worstSymbol',
        title: '最差币种符号',
        readonly: view
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
        field: 'remark',
        title: '备注',
    }];

    buildDetail({
        fields: fields,
        code: {
            code: code
        },
        beforeSubmit: function(data) {
            data.updater = getUserName();
            return data;
        },
        addCode: '628600',
        detailCode: '628611',
        view: view
    });

});