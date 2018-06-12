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
        editCode: '628602',
        detailCode: '628611',
        view: view
    });

});