$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
        title: '评论内容',
        field: 'content',
        search:true,
	},{
		title: '类型',
		field: 'type',
        type: 'select',
        data:{
        	"1":"评论资讯",
        	"2":"评论资讯评论"
        },
        search:true,
	},{
		title: '评论人',
		field: 'nickname',
	},{
		title: '评论时间',
		field: 'commentDatetime',
    	formatter: dateTimeFormat,
        field1: 'commentDateStart',
        title1: '评论时间',
        type: 'date',
        field2: 'commentDateEnd',
        twoDate: true,
        search: true
	}, {
		title: '位置',
		field: 'location',
        type: 'select',
        data:{
			"0":"普通",
			"1":"热门"
        },
        search:true,
	},{
		title: '状态',
		field: 'status',
        type: 'select',
        key: 'post_comment_status',
        formatter: Dict.getNameForList('post_comment_status'),
        search: true
	},{
		title: '针对内容',
		field: 'parentContent',
	}];
	buildList({
		columns: columns,
		pageCode: '628287',
        searchParams: {
    		type:"act"
        }
	});
	
	$('#detailBtn').off("click").click(function(){
		var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        window.location.href = "../coinPostBar/comment_addedit.html?v=1&code=" + selRecords[0].code+"&type="+selRecords[0].type+"&isTop="+selRecords[0].isTop;
	})
	
	//设置位置
    $('#setLocationBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        var dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">设置位置</li></ul>' +
                '</form>'
        });

        dw.showModal();

        buildDetail({
            container: $('#formContainer'),
            fields: [{
                field: 'location1',
                title: '位置',
				type: 'select',
				data:{
					"0":"普通",
					"1":"热门"
				},
				value: selRecords[0].location || '0',
				required: true,
            }],
            buttons: [{
                title: '设置',
                handler: function() {
                	if($('#popForm').valid()){
                        var data = $('#popForm').serializeObject();
                        data.code = selRecords[0].code;
                        data.location = data.location1;
                        delete data.location1;
                        
                        reqApi({
                            code: '628282',
                            json: data
                        }).done(function(data) {
                        	sucList();
                            dw.close().remove();
                        });
                    }

                }
            }, {
                title: '取消',
                handler: function() {
                    dw.close().remove();
                }
            }]
        });

        dw.__center();
        
    });
	
});