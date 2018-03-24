$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '内容',
		field: 'content',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'flash_status',
        formatter: Dict.getNameForList('flash_status'),
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