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
		title: '来源',
		field: 'source',
	},{
        title: '关键字(以英文逗号分隔)',
        field: 'keywords'
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
        title: '摘要',
        field: 'summary'
    },{
		title: '内容',
		field: 'content'
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'news_status',
        formatter: Dict.getNameForList('news_status'),
	},{
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
        title: '备注',
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
    // },{
    //     title: '热门评论',
    //     field: 'hotComentList',
    //     readonly: true,
    //     type: 'o2m',
    //     columns: [{
    //         title: '评论内容',
    //         field: 'content',
    //     },{
    //         title: '评论人',
    //         field: 'nickname',
    //     },{
    //         title: '评论时间',
    //         field: 'commentDatetime',
    //         formatter: dateTimeFormat,
    //     }]
    // },{
    //     title: '评论',
    //     field: 'comentList',
    //     readonly: true,
    //     type: 'o2m',
    //     columns: [{
    //         title: '评论内容',
    //         field: 'content',
    //     },{
    //         title: '评论人',
    //         field: 'nickname',
    //     },{
    //         title: '评论时间',
    //         field: 'commentDatetime',
    //         formatter: dateTimeFormat,
    //     }]
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