$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '内容',
		field: 'content',
		type: 'textarea',
		normalArea: true,
        required: true,
	},{
		title: '来源',
		field: 'source',
        required: true,
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: "628090",
        editCode: "628091",
        detailCode: "628096",
    });

});