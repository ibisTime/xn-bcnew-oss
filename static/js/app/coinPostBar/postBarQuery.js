$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '内容',
		field: 'content',
        formatter: function(v, data){
        	var description = v;
        	if(description.length>50){
				description = description.substring(0,50)+"...";
        	}
        	return description;
        }
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
		title: '板块名称',
		field: 'plateCode',
        type: 'select',
		pageCode:'628235',
        keyName: 'code',
        valueName: '{{name.DATA}}',
        searchName: 'code',
        search:true,
        visible: false
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
        search: true
	}, {
		title: '位置',
		field: 'location',
		type: 'select',
		data:{
			"0":"普通",
			"1":"热门"
		},
        search: true
	},  {
        title: '发布时间',
        field: 'publishDatetime',
        formatter: dateTimeFormat,
        field1: 'publishDatetimeStart',
        title1: '发布时间',
        type: 'date',
        field2: 'publishDatetimeEnd',
        twoDate: true,
        search: true
	}];
	buildList({
		columns: columns,
		pageCode: '628660',
		deleteCode: '628655'
	});
	
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
                            code: '628654',
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
    
    
    //相关评论
    $('#commentBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }

        window.location.href = "./comment.html?objectCode=" + selRecords[0].code;

    });
    
    
});