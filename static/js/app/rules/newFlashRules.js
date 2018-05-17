$(function() {

    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'remark',
        title: '配置名称',
    }, {
        field: 'cvalue',
        title: '配置值'
    }];
    buildList({
        columns: columns,
        pageCode: '628915',
        searchParams : {
            type: 'push_hour'
        }
    });
});