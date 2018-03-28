$(function() {

    var userId = getQueryString('userId');
    var view = !!getQueryString('v');

    var fields = [{
        field: 'mobile',
        title: '手机号',
        required: true,
        readonly: view
    }, {
        title: "昵称",
        field: "nickname",
        readonly: view
    }, {
        field: 'photo',
        title: '头像',
        type: 'img'
    }, {
        field: 'gender',
        title: '性别',
        type:'select',
        data:{
        	"0": "未知",
        	"1": "男",
        	"2": "女"
        }
    }, {
        field: 'birthday',
        title: '生日',
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        key: 'user_status',
        formatter: Dict.getNameForList('user_status'),
    }, {
        field: 'createDatetime',
        title: '注册时间',
        formatter: dateTimeFormat,
    }, {
        field: 'remark',
        title: '备注',
    }];

    buildDetail({
        fields: fields,
        code: {
            userId: userId
        },
        detailCode: '805121',
        view: view
    });

});