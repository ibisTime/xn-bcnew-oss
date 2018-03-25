$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '名称',
		field: 'name',
	},{
		title: '币种',
		field: 'toCoin',
	},{
		title: '介绍',
		field: 'introduce',
		type: 'textarea',
		normalArea: true,
	},{
		title: '关注数',
		field: 'keepCount',
	},{
		title: '发帖数',
		field: 'postCount',
	},{
		title: '今日跟帖数',
		field: 'dayCommentCount',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
		data:{
			"0":"待上架",
			"1":"已上架"
		},
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
        title: '更新时间',
        field: 'updateDatetime',
        formatter: dateTimeFormat
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: true,
        detailCode: '628236',
    });

});