$(function() {
    var code = getQueryString('code');

    var fields = [{
        title: '发布时间',
        field: 'showDatetime',
		type: 'datetime',
        formatter: function(v, data){
        	if(v){
        		return dateTimeFormat(v)
        	} else {
        		return dateTimeFormat(new Date())
        	}
        },
        required: true,
    }];

    buildDetail({
        fields: fields,
        code: code,
        editCode: "628192",
        detailCode: "628196",
    });

});