$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'word',
        title: '关键字',
        search: true
    }, {
        title: '反应',
        field: 'reaction',
        type: 'select',
        key: 'reaction_status',
        formatter: Dict.getNameForList('reaction_status'),
        search: true
    }, {
        field: 'updater',
        title: '最近修改人'
    }, {
        field: 'updateDatetime',
        title: '最近修改时间',
        formatter: dateTimeFormat
    }, {
        field: 'remark',
        title: '备注'
    }];


    buildList({
        columns: columns,
        pageCode: "628225",
        deleteCode: "628221",
        searchParams: {
            companyCode: OSS.company
        },
    });
});