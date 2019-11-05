$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '标题',
		field: 'title',
        required: true,
	},{
		title: '类型',
		field: 'typeName'
	},{
//		title: '币吧',
//		field: 'toCoinName',
//	},{
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
	},{
        field: 'approveResult',
        title: '审核结果',
        required: true,
        data: {
            '1': '通过',
            '0': '不通过'
        },
        type: 'select'
    }, {
        field: 'showDatetime',
        title: '展示时间',
        formatter: dateTimeFormat,
    }, {
        title: '是否置顶',
        field: 'isTop',
        type: 'select',
        data:{
            '0':'否',
            '1':'是'
        }
    }, {
        title: '审核备注',
        field: 'remark',
        type: 'textarea',
        normalArea: true
    }, {
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat,
    }, {
        title: '拥有者名称',
        field: 'ownerName',
    },{
        title: '拥有者类型',
        field: 'ownerType',
        type: 'select',
        key: 'owner_type',
        formatter: Dict.getNameForList('owner_type'),
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