$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '标题',
		field: 'title',
        search:true
	},{
		title: '类型',
		field: 'type',
        type: 'select',
		pageCode:'628005',
        keyName: 'code',
        valueName: 'name',
        search:true
	},{
		title: '作者',
		field: 'auther',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'news_status',
        formatter: Dict.getNameForList('news_status'),
        search: true
	},{
        title: '抓取时间',
        field: 'crawlDatetime',
        formatter: dateTimeFormat,
        field1: 'crawlDateStart',
        title1: '抓取时间',
        type: 'date',
        field2: 'crawlDateEnd',
        twoDate: true,
        search: true
	}];
	buildList({
		columns: columns,
		pageCode: '628015'
	});
	
});