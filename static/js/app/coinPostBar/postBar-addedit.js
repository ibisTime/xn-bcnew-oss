$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');
    
    var buttons = [{
        title: '通过',
        handler: function() {
            var data = {};
            data.approveStatus = '1';
            data.code = code;
            reqApi({
                code: '628651',
                json: data
            }).done(function(data) {
                sucDetail();
            });
        }
    }, {
        title: '不通过',
        handler: function() {
            var data = {};
            data.approveStatus = '0';
            data.code = code;
            reqApi({
                code: '628651',
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
    }];
    
    if(view){
    	buttons = "";
    }

    var fields = [{
        title: '内容',
		field: 'content',
	},{
		title: '发帖人',
		field: 'mobile',
		formatter: function(v, data){
			return data.mobile+"("+data.nickname+")";
		}
	},{
		title: '板块名称',
		field: 'plateName',
	},{
		title: '评论个数',
		field: 'commentCount',
	},{
		title: '点赞个数',
		field: 'pointCount',
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'post_comment_status',
        formatter: Dict.getNameForList('post_comment_status'),
	}, {
		title: '位置',
		field: 'location',
		type: 'select',
		data:{
			"0":"普通",
			"1":"热门"
		},
	},  {
        title: '发布时间',
        field: 'publishDatetime',
        formatter: dateTimeFormat,
	},  {
		title: '更新人',
		field: 'updater',
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: true,
        detailCode: '628661',
        buttons: buttons
    });

});