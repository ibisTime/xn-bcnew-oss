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
                code: '628280',
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
                code: '628280',
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
		        formatter: function(v,data){
		        	return data.typeName
		        },
			},{
				title: '币吧',
				field: 'toCoin',
		        formatter: function(v,data){
		        	return data.toCoinName
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
    
    var actFields={
    		title: '针对活动',
			field: 'activity',
	        readonly: true,
	        type: 'o2m',
	        columns: [{
	           field: 'title',
		        title: '标题',
		    }, {
		        field: 'price',
		        title: '价格',
		        formatter: moneyFormat
		    }, {
		        field: 'maxCount',
		        title: '最大报名人数'
		    }, {
		        field: 'address',
		        title: '地址',
		    }, {
		        field: 'startDatetime',
		        title: '开始时间',
		        formatter: dateTimeFormat,
		    }, {
		        field: 'endDatetime',
		        title: '结束时间',
		        formatter: dateTimeFormat,
		    }, {
		        field: 'contactMobile',
		        title: '联系电话',
		    }, {
		        field: 'applyUser',
		        title: '申请人',
		    }, {
		        field: 'applyDatetime',
		        title: '申请时间',
		        formatter: dateTimeFormat,
		    }, {
		        title: '状态',
		        field: 'status',
		        type: 'select',
		        key: 'activity_status',
		        formatter: Dict.getNameForList('activity_status'),
	        }]
    	};
    
    
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
    }else  if(type=='5'||type=='6'){
    	if(isTop=='0'){
    		showFields = [actFields,postCommentFields]
    	}else{
    		showFields = [actFields]
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
        detailCode: '628288',
        buttons: buttons
    });

});