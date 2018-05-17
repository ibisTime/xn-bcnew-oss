$(function() {
    var id = getQueryString('code');
    
    var fields = [{
        field: 'remark',
        title: '配置名称',
        readonly: true
    }, {
        field: 'cvalue',
        title: '配置值',
        required: true
    }];

    buildDetail({
        fields: fields,
        code: {
            id : id
        },
        detailCode: '628916',
        editCode: '628911',
        beforeSubmit: function(data){
        	data.remark = $("#remark").text();
        	return data;
        }
    });
});