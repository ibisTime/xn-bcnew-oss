$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '标题',
		field: 'title',
        required: true,
	},{
		title: '类型',
		field: 'type',
        type: 'select',
		pageCode:'628005',
		params:{
			status: "1"
		},
        keyName: 'code',
        valueName: 'name',
        required: true,
	},{
		title: '币吧',
		field: 'toCoin',
        type: 'select',
		pageCode:'628235',
		params:{
			status: '1'
		},
        keyName: 'code',
        valueName: 'name',
	},{
		title: '来源',
		field: 'source',
	},{
		title: '作者',
		field: 'auther',
	},{
		title: '广告图(最多三张)',
		field: 'advPic',
		type: 'img',
        required: true,
	},{
		title: '内容',
		field: 'content',
		type: 'textarea',
        required: true,
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: "628190",
        editCode: "628191",
        detailCode: "628196",
    });

});