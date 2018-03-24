$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '名称',
		field: 'name',
        required: true,
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'category_status',
        formatter: Dict.getNameForList('category_status'),
        hidden: !view
	}, {
		title: '顺序',
		field: 'orderNo',
        required: true,
	},  {
		title: '更新人',
		field: 'updater',
        hidden: !view
	},  {
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat,
        hidden: !view
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: "628000",
        editCode: "628001",
        detailCode: '628006',
        beforeSubmit: function(data){
        	delete data.status;
        	delete data.updateDatetime;
        	data.updater = getUserName();
        	
        	return data;
        }
    });

});