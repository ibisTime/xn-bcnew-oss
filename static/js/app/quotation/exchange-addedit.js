$(function() {
    var id = getQueryString('id');
    var view = !!getQueryString('v');
    
    var fields = [{
        title: '交易所英文名',
		field: 'ename',
        search: true
	}, {
		title: '交易所中文名',
		field: 'cname',
	}, {
		title: '简介',
		field: 'introduce',
		type:'textarea',
		normalArea: true
	}, {
        title: "状态",
        field: "status",
        type:'select',
        data:{
        	'0':'待上架',
        	'1':'已上架'
        },
        required: true,
    }, {
        title: "位置",
        field: "location",
        type:'select',
        data:{
        	'0':'普通',
        	'1':'热门'
        },
        required: true,
    }, {
        title: "序号",
        field: "orderNo",
        required: true,
    }, {
        title: "备注",
        field: "remark",
    }];
    
    var options = {
        fields: fields,
        code: {
        	id: id
        },
        view: view,
        editCode: "628312",
        detailCode: "628316",
        beforeSubmit: function(data){
        	if(id){
        		data.id = id
        	}
        	return data;
        },
    };
    
    buildDetail(options);
});