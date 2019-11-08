$(function() {
    var code = getQueryString('code');
    var view = !!getQueryString('v');

    var fields = [{
        title: '标题',
		field: 'title',
        required: true,
        maxlength: 24
	},{
		title: '类型',
		field: 'typeList',
        type: 'checkbox',
		listCode:'628007',
        keyName: 'code',
        valueName: 'name',
        required: true
	},{
        title: '关键字(以英文逗号分隔)',
        field: 'keywords',
        required: true
    },{
		title: '来源',
		field: 'source',
	},{
		title: '作者',
		field: 'auther',
	},{
		title: '广告图(最多三张)',
		field: 'advPic',
		type: 'img',
        required: true,
	},{
        title: '摘要',
        field: 'summary',
        type: 'textarea',
        required: true,
        normalArea: true,
        maxlength: 180
    },{
		title: '内容',
		field: 'content',
		type: 'textarea',
        required: true
    }];
    setTimeout(() => {
        const parEle = $('#content').parent()[0];
        const pEle = `<p style="color: red;margin-top: 15px;">
            注：内容不能低于600个字, 每300个字之后，要有一张图片
        </p>`;
        $(parEle).append(pEle);
    }, 500);
    buildDetail({
        fields: fields,
        code: code,
        view: view,
        addCode: "628190",
        editCode: "628191",
        detailCode: "628196",
        beforeSubmit(params) {
            if(typeof params.typeList === 'string') {
                params.typeList = [params.typeList];
            }
            return params;
        }
    });

});