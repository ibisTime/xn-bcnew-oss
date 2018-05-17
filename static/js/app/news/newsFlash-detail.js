$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '内容',
		field: 'content',
		type: 'textarea',
		normalArea: true,
	},{
		title: '类型',
		field: 'type',
        type: 'select',
        data:{
        	"0":"普通",
        	"1":"热门"
        },
	},{
		title: '来源',
		field: 'source',
	},{
		title: '是否推送',
		field: 'isPush',
        type: 'select',
        data:{
        	"0":"不推送",
        	"1":"推送"
        },
	},{
		title: '是否置顶',
		field: 'isTop',
		type: 'select',
		data:{
			'0':'否',
			'1':'是'
		},
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'flash_status',
        formatter: Dict.getNameForList('flash_status'),
	},{
        title: '显示时间',
        field: 'showDatetime',
        formatter: dateTimeFormat,
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: true,
        addCode: "628090",
        editCode: "628091",
        detailCode: "628096",
    });

});