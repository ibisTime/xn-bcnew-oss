$(function() {
    var code = getQueryString('code');

    var fields = [{
		title: '类型',
		field: 'type',
        type: 'select',
        data:{
        	"0":"普通",
        	"1":"热门"
        },
        required: true,
	},{
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
        editCode: "628092",
        detailCode: "628096",
    });

});