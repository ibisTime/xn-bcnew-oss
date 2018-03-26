$(function() {
    var code = getQueryString('code');
    var type = getQueryString('type');
    var isTop = getQueryString('isTop');//是否顶级评论  0=不是   1=是
    var view = !!getQueryString('v');
    var showFields = [];
    
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
    
    var newsFields={
    		title: '针对资讯',
			field: 'news',
	        readonly: true,
	        type: 'o2m',
	        columns: [{
	            title: '标题',
				field: 'title',
		        formatter: function(v,data){
		        	return data.title
		        },
			},{
				title: '类型',
				field: 'type',
		        type: 'select',
				pageCode:'628005',
		        keyName: 'code',
		        valueName: 'name',
		        formatter: function(v,data){
		        	return data.type
		        },
			},{
				title: '币吧',
				field: 'toCoin',
		        type: 'select',
				pageCode:'628235',
		        keyName: 'code',
		        valueName: 'name',
		        formatter: function(v,data){
		        	return data.toCoin
		        },
			},{
				title: '来源',
				field: 'source',
		        formatter: function(v,data){
		        	return data.source
		        },
			},{
				title: '作者',
				field: 'auther',
		        formatter: function(v,data){
		        	return data.auther
		        },
			},{
				title: '状态',
				field: 'status',
		        type: 'select',
		        formatter: function(v,data){
		        	return Dict.getNameForList1('news_status','',data.status)
		        },
			},{
		        title: '发布时间',
		        field: 'showDatetime',
		        formatter: function(v,data){
		        	return dateTimeFormat(data.showDatetime)
		        },
			},{
		        title: '更新时间',
		        field: 'updateDatetime',
		        formatter: function(v,data){
		        	return dateTimeFormat(data.updateDatetime)
		        },
	        }]
    	};
    	
    var newsCommentFields={
    		title: '针对评论',
			field: 'parentComment',
	        readonly: true,
	        type: 'o2m',
	        columns: [{
	            title: '评论内容',
	            field: 'content',
			},{
				title: '评论人',
				field: 'nickname',
			},{
				title: '评论时间',
				field: 'commentDatetime',
	        	formatter: dateTimeFormat,
	        }]
    	}
   	
   	var postFields={
    		title: '针对帖子',
			field: 'post',
	        readonly: true,
	        type: 'o2m',
	        columns: [{
	            title: '内容',
	            field: 'content',
			},{
				title: '发帖人',
				field: 'nickname',
			},{
				title: '发帖时间',
				field: 'publishDatetime',
	        	formatter: dateTimeFormat,
	        }]
    	};
    	
    var postCommentFields={
    		title: '针对评论',
			field: 'parentComment',
	        readonly: true,
	        type: 'o2m',
	        columns: [{
	            title: '评论内容',
	            field: 'content',
			},{
				title: '评论人',
				field: 'nickname',
			},{
				title: '评论时间',
				field: 'commentDatetime',
	        	formatter: dateTimeFormat,
	        }]
    	}
    
    
    
    //资讯
    if(type=='1'||type=='2'){
    	if(isTop=='0'){
    		showFields = [newsFields,newsCommentFields]
    	}else{
    		showFields = [newsFields]
    	}
    //帖子
    }else if(type=='3'||type=='4'){
    	if(isTop=='0'){
    		showFields = [postFields,postCommentFields]
    	}else{
    		showFields = [postFields]
    	}
    }

    var fields = [{
        title: '评论内容',
        field: 'content',
	},{
		title: '类型',
		field: 'type',
        type: 'select',
        key: 'comment_type',
        formatter: Dict.getNameForList('comment_type'),
        search:true,
	},{
		title: '评论人',
		field: 'nickname',
	},{
		title: '评论时间',
		field: 'commentDatetime',
    	formatter: dateTimeFormat,
	}, {
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'post_comment_status',
        formatter: Dict.getNameForList('post_comment_status'),
        search: true
	}];
	
	fields = fields.concat(showFields)

    buildDetail({
        fields: fields,
        code: code,
        view: true,
        editCode: "628280",
        detailCode: '628288',
        buttons: buttons
    });

});