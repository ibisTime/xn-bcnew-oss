$(function() {
    var code = getQueryString('code');
    var type = getQueryString('type');
    
    if(type=='0'){
		$("#isPush").parent("li").css({"display":"none"})
	}else{
		$("#isPush").parent("li").css({"display":"inherit"})
	}

    var fields = [{
		title: '类型',
		field: 'type',
        type: 'select',
        data:{
        	"0":"普通",
        	"1":"热门"
        },
        onChange: function(v){
        	if(v=='0'){
        		$("#isPush").parent("li").css({"display":"none"})
        	}else{
        		$("#isPush").parent("li").css({"display":"inherit"})
        	}
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
	},{
		title: '是否推送',
		field: 'isPush',
        type: 'select',
        data:{
        	"0":"不推送",
        	"1":"推送"
        },
        required: true,
    }];

    buildDetail({
        fields: fields,
        code: code,
        editCode: "628092",
        detailCode: "628096",
        beforeSubmit: function(data){
        	data.isTop = 0;
        	return data;
        }
    });

});