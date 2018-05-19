$(function() {
    var id= getQueryString('id');
    var isCheck = !!getQueryString('isCheck');
    
    var buttons=[{
	        title: '通过',
	        handler: function() {
                var data = $('#jsForm').serializeObject();
	            data.id = id;
	            data.approveResult = '1';
	            data.approver = getUserName();
	            reqApi({
	                code: '628521',
	                json: data
	            }).done(function(data) {
	                sucDetail();
	            });
	        }
	    }, {
	        title: '不通过',
	        handler: function() {
                var data = $('#jsForm').serializeObject();
	            data.id = id;
	            data.approveResult = '0';
	            data.approver = getUserName();
	            reqApi({
	                code: '628521',
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
    	field: 'realName',
        title: '姓名',
    }, {
        field: 'mobile',
        title: '手机号'
    }, {
        field: 'title',
        title: '活动标题',
        _keys: ["activity"],
        required: true,
        readonly: true
    }, {
        field: 'contactMobile',
        title: '活动联系电话',
        _keys: ["activity"],
        tm: true,
        required: true,
        readonly: true
    }, {
        field: 'advPic',
        title: '活动广告图',
        _keys: ["activity"],
        type:'img',
		single: true,
        required: true,
        readonly: true
    }, {
        field: 'price',
        title: '活动价格',
        _keys: ["activity"],
        amount: true,
        formatter: moneyFormat,
        required: true,
        readonly: true
    }, {
        field: 'maxCount',
        title: '活动最大报名人数',
        _keys: ["activity"],
        number: true,
        required: true,
        readonly: true
    }, {
        field: 'startDatetime',
        title: '活动开始时间',
        _keys: ["activity"],
        type: 'datetime',
        formatter: dateTimeFormat,
        required: true,
        readonly: true
    }, {
        field: 'endDatetime',
        title: '活动结束时间',
        _keys: ["activity"],
        type: 'datetime',
        formatter: dateTimeFormat,
        required: true,
        readonly: true
    }, {
        field: 'address',
        title: '导航地址',
        _keys: ["activity"],
        required: true,
        readonly: true
    }, {
        field: 'meetAddress',
        title: '详细地址',
        _keys: ["activity"],
        required: true,
        readonly: true
    }, {
		title: '活动内容',
		field: 'content',
        _keys: ["activity"],
		type: 'textarea',
		required: true,
        readonly: true
    }, {
        field: 'applyUser',
        title: '活动申请人',
        _keys: ["activity"],
        readonly: true
    }, {
        field: 'applyDatetime',
        title: '活动申请时间',
        _keys: ["activity"],
        formatter: dateTimeFormat,
        readonly: true
    }, {
        title: '活动状态',
        field: 'actstatus',
        type: 'select',
        key: 'activity_status',
        formatter: function(v, data){
        	return Dict.getNameForList1('activity_status','',data.activity.status)
        },
    }, {
        title: '报名状态',
        field: 'status',
        type: 'select',
        key: 'activity_user_status',
        formatter: Dict.getNameForList('activity_user_status'),
    }, {
        field: 'approveDatetime',
        title: '报名审批时间',
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
        code: id,
        view: true,
        detailCode: '628526',
        buttons: buttons
    });
});