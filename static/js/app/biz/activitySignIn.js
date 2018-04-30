$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'realName',
        title: '姓名',
    }, {
        field: 'mobile',
        title: '用户'
    }, {
        field: 'userId',
        title: '用户',
        type: 'select',
        pageCode: '805120',
        params: {
            kind:'C',
            updater:""
        },
        keyName: 'userId',
        valueName: '{{nickname.DATA}}-{{mobile.DATA}}',
        searchName: 'mobile',
        search: true
    }, {
        field: 'title',
        title: '活动标题',
        formatter: function(v, data){
        	return data.activity.title
        }
    }, {
        field: 'address',
        title: '活动地址',
        formatter: function(v, data){
        	return data.activity.address
        }
    }, {
        field: 'startDatetime',
        title: '活动开始时间',
        formatter: function(v, data){
        	return dateTimeFormat(data.activity.startDatetime)
        }
    }, {
        field: 'endDatetime',
        title: '活动结束时间',
        formatter: function(v, data){
        	return dateTimeFormat(data.activity.endDatetime)
        }
    }, {
        field: 'applyDatetime',
        title: '申请时间',
        formatter: dateTimeFormat
    }, {
        field: 'approveDatetime',
        title: '审批时间',
        formatter: dateTimeFormat
    }, {
        title: '状态',
        field: 'status',
        type: 'select',
        key: 'activity_user_status',
        formatter: Dict.getNameForList('activity_user_status'),
        search: true
    }];

    buildList({
        columns: columns,
        pageCode: "628525",
        searchParams: {
            companyCode: OSS.company
        },
    });
    
    //详情
    $('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "./activitySignIn_detail.html?id=" + selRecords[0].id;
	})
    
    //审核
    $('#checkBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        if (selRecords[0].status != '0') {
            toastr.info("不是待审核的活动");
            return;
        }
        
        window.location.href = "./activitySignIn_detail.html?id=" + selRecords[0].id+"&isCheck=1";
	})
});