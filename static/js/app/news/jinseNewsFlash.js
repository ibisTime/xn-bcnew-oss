$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '内容',
		field: 'content',
	},{
        title: '抓取时间',
        field: 'crawlDatetime',
        formatter: dateTimeFormat,
        field1: 'crawlDateStart',
        title1: '抓取时间',
        type: 'date',
        field2: 'crawlDateEnd',
        twoDate: true,
        search: true
    }, {
		title: '挑选次数',
		field: 'pickCount',
    }, {
		title: '挑选人',
		field: 'pickUser',
    }, {
		title: '挑选时间',
		field: 'pickDatetime',
        formatter: dateTimeFormat,
	}];
	buildList({
		columns: columns,
		pageCode: '628015',
		singleSelect:false,
	});
	
	//挑选
    $('#chooseBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        
        var idList=[];
        
        for (var i=0; i<selRecords.length; i++) {
        	
        	idList.push(selRecords[i].id)
        }
        
        var dw = dialog({
            content: '<form class="pop-form" id="popForm" novalidate="novalidate">' +
                '<ul class="form-info" id="formContainer"><li style="text-align:center;font-size: 15px;">挑选快讯</li></ul>' +
                '</form>'
        });

        dw.showModal();

        buildDetail({
            container: $('#formContainer'),
            fields: [{
				title: '类型',
				field: 'type',
		        type: 'select',
		        data:{
		        	"0":"普通",
		        	"1":"热门"
		        },
            }],
            buttons: [{
                title: '挑选',
                handler: function() {
                	if($('#popForm').valid()){
                        var data = $('#popForm').serializeObject();
                        data.idList = idList;
                        
                        reqApi({
                            code: '628010',
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