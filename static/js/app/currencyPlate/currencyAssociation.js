$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'symbol',
        title: '币种符号',
    }, {
        field: 'symbolPlateCode',
        title: '版块名称',
        type: 'select',
        listCode: '628612',
        keyName: 'code',
        valueName: 'name',
        search: true,
        visible: false
    }, {
        field: 'symbolPlateName',
        title: '板块名称',
    }];
    buildList({
        columns: columns,
        pageCode: '628625',
        deleteCode: '628621'
    });

});