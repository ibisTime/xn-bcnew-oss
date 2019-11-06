$(function() {
    var code = getQueryString('code');
	var approveOk = true;
    var fields = [{
    	title: '标题',
		field: 'title',
        readonly: true,
	},{
		title: '类型',
		field: 'typeName',
        readonly: true,
	},{
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
        readonly: true,
	},{
		title: '内容',
		field: 'content',
		type: 'textarea',
        readonly: true,
	},{
        field: 'approveResult',
        title: '审核结果',
        required: true,
        data: {
            '1': '通过',
            '0': '不通过'
        },
        type: 'select',
        onChange(v) {
            if(v) {
                approveOk = v === '0';
                const nextLiAll = $($('#approveResult_chosen').parent()[0]).nextAll('.clearfix');
                const lastEle = $($('#approveResult_chosen').parent()[0]).nextAll('.clearfix').last();
                if(!approveOk) {
                    $(nextLiAll).each((index, item) => {
                        $(item).show();
                    });
                    $(lastEle).hide();
                }else {
                    $(nextLiAll).each((index, item) => {
                        $(item).hide();
                    });
                    $(lastEle).show();
                }
            }
        }
    }, {
        field: 'showDatetime',
        title: '展示时间',
        required: true,
        type: 'datetime',
        hidden: approveOk
    }, {
        title: '是否置顶',
        field: 'isTop',
        type: 'select',
        data:{
            '0':'否',
            '1':'是'
        },
        required: true,
        hidden: approveOk
    }, {
        title: '审核备注',
        field: 'remark',
        type: 'textarea',
        normalArea: true,
        required: true,
        hidden: !approveOk
    }];

    buildDetail({
        fields: fields,
        code: code,
        detailCode: "628196",
        buttons:[{
	        title: '确定',
	        handler: function() {
	            if($('#jsForm').valid()) {
                    var data = $('#jsForm').serializeObject();
                    data.code = code;
                    if(approveOk) {
                        delete data.showDatetime;
                        delete data.isTop;
                    }
                    reqApi({
                        code: '628192',
                        json: data
                    }).done(function() {
                        sucDetail();
                    });
                }
	        }
	    }, {
	        title: '返回',
	        handler: function() {
	            goBack();
	        }
	    }]
    });

});