$(function() {
	var code;
	reqApi({
		code: '628917',
		json: {
			ckey: 'about_us'
		},
		sync: true
	}).then(function(data) {
		code = data.id;
	});
	var view = !!getQueryString('v');
	
	var fields = [{
		field: 'remark',
		type: 'hidden',
		value: '关于我们'
	},{
		title: '内容',
		field: 'cvalue',
		type: 'textarea',
		required: true
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		editCode: '628911',
		detailCode: '628916',
		buttons: [{
			title: '保存',
			handler: function() {
				if ($('#jsForm').valid()) {
					var data = $('#jsForm').serializeObject();
					data['id'] = data['code'];
					reqApi({
						code: '628911',
						json: data
					}).done(function(data) {
						toastr.success('操作成功');
					});
				}
			}
		}]
	});
});