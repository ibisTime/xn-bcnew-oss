$(function() {
    var id = getQueryString('id');
    var view = !!getQueryString('v');

    var fields = [{
        title: '标题',
		field: 'title',
        search:true
	},{
		title: '作者',
		field: 'auther',
	},{
		title: '广告图',
		field: 'advPic',
		type: 'img',
        required: true,
	},{
		title: '内容',
		field: 'content',
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
    }, {
		title: '挑选次数',
		field: 'pickCount',
    }, {
		title: '挑选人',
		field: 'pickUser',
    }, {
		title: '挑选时间',
		field: 'pickDatetime',
        formatter: dateTimeFormat,
    }];

    buildDetail({
        fields: fields,
        code: {
        	id: id
        },
        view: true,
        detailCode: "628106",
    });

});