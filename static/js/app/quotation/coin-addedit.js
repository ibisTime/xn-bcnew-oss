$(function() {
    var id = getQueryString('id');
    var view = !!getQueryString('v');
    var isDetail = !!getQueryString('isDetail');
    
    var fields = [{
        title: "项目信息",
        type: "title"
    }, {
        title: "币种符号",
        field: "symbol",
        readonly: !!id,
        required: true,
    }, {
        title: "英文名称",
        field: "ename",
        required: true,
    }, {
        title: "中文名称",
        field: "cname",
        required: true,
    }, {
        title: "单位",
        field: "unit",
    }, {
        title: "图标",
        field: "pic",
        type: 'img',
        single: true
    }, {
        title: "币种介绍",
        field: "introduce",
        type:'textarea',
        normalArea: true
    }, {
        title: "流通量",
        field: "totalSupply",
        min:'0',
        readonly: !!id,
    }, {
        title: "流通值",
        field: "totalSupplyMarket",
        min:'0',
        readonly: !!id,
    }, {
        title: "总发行量",
        field: "maxSupply",
        min:'0',
        readonly: !!id,
    }, {
        title: "总市值",
        field: "maxSupplyMarket",
        min:'0',
        readonly: !!id,
    }, {
        title: "市值排名",
        field: "rank",
        readonly: !!id,
    }, {
        title: "上架交易所",
        field: "putExchange",
    }, {
        title: "前10交易所",
        field: "topExchange",
    }, {
        title: "钱包类型",
        field: "walletType",
    }, {
        title: "链接",
        type: "title"
    }, {
        title: "官网地址",
        field: "webUrl",
    }, {
        title: "github地址",
        field: "gitUrl",
    }, {
        title: "Twitter地址",
        field: "twitter",
    }, {
        title: "公募信息",
        type: "title"
    }, {
        title: "ICO时间",
        field: "icoDatetime",
        type:'date',
    }, {
        title: "ICO成本",
        field: "icoCost",
    }, {
        title: "募集资金",
        field: "raiseAmount",
    }, {
        title: "代币分配",
        field: "tokenDist",
    }, {
        title: "项目简介",
        type: "title"
    }, {
        title: "最新提交次数",
        field: "lastCommitCount",
        number: true,
        min:'0',
    }, {
        title: "总提交次数",
        field: "totalCommitCount",
        number: true,
        min:'0',
    }, {
        title: "总贡献值",
        field: "totalDist",
        number: true,
    }, {
        title: "粉丝数",
        field: "fansCount",
        number: true,
        min:'0',
    }, {
        title: "关注数",
        field: "keepCount",
        number: true,
        min:'0',
    }, {
        title: "复制数",
        field: "copyCount",
        number: true,
        min:'0',
    }, {
        title: "其他",
        type: "title"
    }, {
        title: "更新人",
        field: "updater",
        hidden: !isDetail
    }, {
        title: "更新时间",
        field: "updateDatetime",
        formatter: dateTimeFormat,
        hidden: !isDetail
    }, {
        title: "位置",
        field: "location",
        type:'select',
        data:{
        	'0':'普通',
        	'1':'热门'
        },
        required: true,
    }, {
        title: "序号",
        field: "orderNo",
        required: true,
    }, {
        title: "备注",
        field: "remark",
    }];
    
    var options = {
        fields: fields,
        code: {
        	id: id
        },
        view: view,
        editCode: "628302",
        detailCode: "628306",
        beforeSubmit: function(data){
        	delete data.collectStartString;
        	delete data.withdrawFeeString;
        	delete data.updater;
        	delete data.updateDatetime;
        	delete data.status;
        	delete data.type;
        	if(id){
        		data.id = id
        	}
        	return data;
        }
    };
    buildDetail(options);
});