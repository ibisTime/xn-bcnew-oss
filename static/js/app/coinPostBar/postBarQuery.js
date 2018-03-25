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
		title: '更新人',
		field: 'updater',
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
		pageCode: '628660'
	});
	
});