$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    
    var fields = [{
        title: '内容',
		field: 'content',
	},{
		title: '发帖人',
		field: 'mobile',
		formatter: function(v, data){
			return data.mobile+"("+data.nickname+")";
		}
	},{
		title: '板块名称',
		field: 'plateName',
	},{
		title: '评论个数',
		field: 'commentCount',
	},{
		title: '点赞个数',
		field: 'pointCount',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'post_comment_status',
        formatter: Dict.getNameForList('post_comment_status'),
	}, {
		title: '位置',
		field: 'location',
		type: 'select',
		data:{
			"0":"普通",
			"1":"热门"
		},
	},  {
		title: '更新人',
		field: 'updater',
	},  {
        title: '发布时间',
        field: 'publishDatetime',
        formatter: dateTimeFormat,
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: true,
        editCode: "628651",
        detailCode: '628661',
    });

});