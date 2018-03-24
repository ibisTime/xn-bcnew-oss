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
        keyName: 'code',
        valueName: 'name',
	},{
		title: '来源',
		field: 'source',
	},{
		title: '作者',
		field: 'auther',
	},{
		title: '广告图',
		field: 'advPic',
		type: 'img',
		single: true,
        required: true,
	},{
		title: '内容',
		field: 'content',
		type: 'textarea',
        required: true,
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'news_status',
        formatter: Dict.getNameForList('news_status'),
        search: true
	},{
        title: '发布时间',
        field: 'showDatetime',
        formatter: dateTimeFormat,
	},{
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat,
	},{
        title: '热门评论',
		field: 'hotComentList',
        readonly: true,
        type: 'o2m',
        columns: [{
            title: '评论内容',
            field: 'content',
		},{
			title: '评论人',
			field: 'nickname',
		},{
			title: '评论时间',
			field: 'commentDatetime',
        	formatter: dateTimeFormat,
        }]
	},{
        title: '评论',
		field: 'comentList',
        readonly: true,
        type: 'o2m',
        columns: [{
            title: '评论内容',
            field: 'content',
		},{
			title: '评论人',
			field: 'nickname',
		},{
			title: '评论时间',
			field: 'commentDatetime',
        	formatter: dateTimeFormat,
        }]
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: true,
        addCode: "628190",
        editCode: "628191",
        detailCode: "628196",
    });

});