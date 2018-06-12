$(function() {

    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'coinId',
        title: '币种',
        type: 'select',
        search: 'true',
        pageCode: '628305',
        keyName: 'id',
        valueName: 'ename',
        required: true
    }, {
        field: "symbolPlateCode",
        title: "版块",
        type: 'select',
        search: 'true',
        pageCode: '628610',
        params: {
            statusList: ['0', '1']
        },
        keyName: 'code',
        valueName: 'name',
        required: true
    }];

    buildDetail({
        fields: fields,
        code: {
            code: code
        },
        addCode: '628620',
        editCode: '628602',
        detailCode: '628611',
        view: view
    });

});