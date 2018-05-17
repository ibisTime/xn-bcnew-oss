$(function() {
    var code = getQueryString('code');
    var isCheck = !!getQueryString('isCheck');
    
    var buttons=[{
	        title: '通过',
	        handler: function() {
                var data = $('#jsForm').serializeObject();
	            data.code = code;
	            data.approveResult = '1';
	            data.approver = getUserName();
	            reqApi({
	                code: '628503',
	                json: data
	            }).done(function(data) {
	                sucDetail();
	            });
	        }
	    }, {
	        title: '不通过',
	        handler: function() {
                var data = $('#jsForm').serializeObject();
	            data.code = code;
	            data.approveResult = '0';
	            data.approver = getUserName();
	            reqApi({
	                code: '628503',
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
   	
   	if(!isCheck){
   		buttons=[{
	        title: '返回',
	        handler: function() {
	            goBack();
	        }
	    }]
   	}

    var fields = [{
        field: 'title',
        title: '标题',
        required: true,
        readonly: true
    }, {
        field: 'contactMobile',
        title: '联系电话',
        tm: true,
        required: true,
        readonly: true
    }, {
        field: 'advPic',
        title: '广告图',
        type:'img',
		single: true,
        required: true,
        readonly: true
    }, {
        field: 'price',
        title: '价格',
        amount: true,
        formatter: moneyFormat,
        required: true,
        readonly: true
    }, {
        field: 'maxCount',
        title: '最大报名人数',
        number: true,
        required: true,
        readonly: true
    }, {
        field: 'startDatetime',
        title: '开始时间',
        type: 'datetime',
        formatter: dateTimeFormat,
        required: true,
        readonly: true
    }, {
        field: 'endDatetime',
        title: '结束时间',
        type: 'datetime',
        formatter: dateTimeFormat,
        required: true,
        readonly: true
    }, {
        field: 'address',
        title: '导航地址',
        required: true,
        readonly: true
    }, {
        field: 'meetAddress',
        title: '详细地址',
        required: true,
    }, {
		title: '内容',
		field: 'content',
		type: 'textarea',
		required: true,
        readonly: true
    }, {
        field: 'address',
        title: '经度',
        hidden: true,
        readonly: true
    }, {
        field: 'address',
        title: '纬度',
        hidden: true,
        readonly: true
    }, {
        field: 'readCount',
        title: '浏览数',
        hidden: isCheck,
        readonly: true
    }, {
        field: 'collectCount',
        title: '收藏数',
        hidden: isCheck,
        readonly: true
    }, {
        field: 'pointCount',
        title: '点赞数',
        hidden: isCheck,
        readonly: true
    }, {
        field: 'commentCount',
        title: '评论数',
        hidden: isCheck,
        readonly: true
    }, {
        field: 'toApproveCount',
        title: '待审核数量',
        hidden: isCheck,
        readonly: true
    }, {
        field: 'applyUser',
        title: '申请人',
        readonly: true
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        formatter: dateTimeFormat,
        readonly: true
    }, {
        title: '状态',
        field: 'status',
        type: 'select',
        key: 'activity_status',
        formatter: Dict.getNameForList('activity_status'),
	},{
		title: '是否置顶',
		field: 'isTop',
		type: 'select',
		data:{
			'0':'否',
			'1':'是'
		},
        hidden: isCheck
    }, {
        field: 'approveDatetime',
        title: '审批时间',
        formatter: dateTimeFormat,
        readonly: true,
        hidden: isCheck
    }, {
        field: 'approver',
        title: '审批人',
        hidden: isCheck,
    }, {
        field: 'approveNote',
        title: '审批备注',
        required: true,
        readonly: !isCheck
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: true,
        detailCode: '628506',
        buttons: buttons
    });
});