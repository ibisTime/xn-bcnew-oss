$(function() {

	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'remark',
		title : '规则名称'
	},{
		field : 'ckey',
		title : '参数',
		search: true
	},{
		field : 'cvalue',
		title : '数值'
	}];
	buildList({
		columns: columns,
		pageCode: '628915',
		searchParams: {
			type: 'ios-c',
			companyCode: OSS.company,
			orderColumn:'id',
			orderDir: 'asc'
		},
		beforeEdit: function(r) {
			location.href = '../rules/ruleV_addedit.html?code=' + r.id +"&t="+ r.type;
		}
	});
});
