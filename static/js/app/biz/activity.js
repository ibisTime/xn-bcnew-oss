$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
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
        field1: 'startDatetimeStart',
        title1: '开始时间',
        type: 'datetime',
        field2: 'startDatetimeEnd',
        twoDate: true,
        search: true
    }, {
        field: 'endDatetime',
        title: '结束时间',
        formatter: dateTimeFormat,
        field1: 'endDatetimeStart',
        title1: '结束时间',
        type: 'datetime',
        field2: 'endDatetimeEnd',
        twoDate: true,
        search: true
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
        field1: 'applyDatetimeStart',
        title1: '申请时间',
        type: 'datetime',
        field2: 'applyDatetimeEnd',
        twoDate: true,
        search: true
    }, {
        field: 'approveDatetime',
        title: '审批时间',
        formatter: dateTimeFormat
    }, {
        title: '状态',
        field: 'status',
        type: 'select',
        key: 'activity_status',
        formatter: Dict.getNameForList('activity_status'),
        search: true
    }, {
        field: 'toApproveCount',
        title: '待审核数量'
	},{
		title: '是否置顶',
		field: 'isTop',
		type: 'select',
		data:{
			'0':'否',
			'1':'是'
		},
    }];

    buildList({
        columns: columns,
        pageCode: "628505",
        searchParams: {
            companyCode: OSS.company
        },
    });
    
    //修改
    $('#editBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        if (selRecords[0].status != '0' && selRecords[0].status != '2') {
            toastr.info("不是可修改的状态");
            return;
        }
        
        window.location.href = "./activity_addedit.html?code=" + selRecords[0].code;
	})
    
    
    //详情
    $('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "./activity_detail.html?code=" + selRecords[0].code;
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
        
        window.location.href = "./activity_detail.html?code=" + selRecords[0].code+"&isCheck=1";
	})
    
    
    //置顶/取消置顶
    $('#setIsTopBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        var msg = selRecords[0].isTop=='0'?"确定置顶？":"确定取消置顶？"

        confirm(msg).then(function() {
			reqApi({
	            code: '628513',
	            json: {
	                code: selRecords[0].code,
	            }
	        }).then(function() {
	            sucList();
	        });
        }, function() {})
    });
    
    
});