$(function() {
	
	var code = getQueryString('code');
	
    setTimeout(() => {
        const parEle = $('#loginName').parent()[0];
        const pEle = `<span style="color: red;margin-left: 15px;display: inline-block;">
            默认密码为：888888
        </span>`;
        $(parEle).append(pEle);
    }, 500);
    
	var fields = [{
		field: 'kind',
		type: 'hidden',
		value: 'P'
	}, {
		title: '用户名',
		field: 'loginName',
		required: true,
		maxlength: 30
	}, {
		title: '角色',
		field: 'roleCode',
		required: true,
		type: 'select',
		listCode: '805021',
		keyName: 'code',
		valueName: 'name'
	}, {
		title: '备注',
		field: 'remark',
		maxlength: 250
	}];
	
	buildDetail({
		fields: fields,
		code: code,
		detailCode: '805121',
		addCode: '805042'
	});
	
});