$(function() {
    var code = getQueryString('code');
    var isUp = !!getQueryString('isUp');

    var fields = [{
    	title: '标题',
		field: 'title',
        required: true,
        readonly: true,
	},{
		title: '类型',
		field: 'typeName',
        readonly: true,
	},{
//		title: '币吧',
//		field: 'toCoinName',
//      readonly: true,
//	},{
		title: '来源',
		field: 'source',
        readonly: true,
	},{
		title: '作者',
		field: 'auther',
        readonly: true,
	},{
		title: '广告图',
		field: 'advPic',
		type: 'img',
		single: true,
        required: true,
        readonly: true,
	},{
		title: '内容',
		field: 'content',
		type: 'textarea',
        required: true,
        readonly: true,
	},{
        title: '发布时间',
        field: 'showDatetime',
		type: 'datetime',
		value: !isUp ? dateTimeFormat(new Date()) : '',
        formatter: dateTimeFormat,
        required: true,
	},{
		title: '是否置顶',
		field: 'isTop',
		type: 'select',
		data:{
			'0':'否',
			'1':'是'
		},
        required: true,
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: "628196",
        buttons:[{
	        title: '上架',
	        handler: function() {
                var data = $('#jsForm').serializeObject();
	            data.code = code;
	            reqApi({
	                code: '628192',
	                json: data
	            }).done(function(data) {
	                sucDetail();
	            });
	        }
	    }, {
	        title: '返回',
	        handler: function() {
	            goBack();
	        }
	    }]
    });

});