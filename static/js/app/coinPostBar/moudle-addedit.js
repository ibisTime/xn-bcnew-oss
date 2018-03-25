$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '名称',
		field: 'name',
        required: true,
	},{
		title: '介绍',
		field: 'introduce',
		type: 'textarea',
		normalArea: true,
        required: true,
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: "628230",
        editCode: "628231",
        detailCode: '628236',
    });

});