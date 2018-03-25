$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '币种',
		field: 'symbol',
        search: true,
	},{
		title: '市值排名',
		field: 'rank',
	},{
		title: '最新美元价格',
		field: 'priceUsd',
	},{
		title: '最新人民币价格',
		field: 'priceCny',
	},{
		title: '24h美元交易量',
		field: 'h24VolumeUsd',
	},{
		title: '24h人民币交易量',
		field: 'h24VolumeCny',
	},{
		title: '美元市值',
		field: 'marketCapUsd',
	},{
		title: '人民币市值',
		field: 'marketCapCny',
	},{
		title: '流通量',
		field: 'totalSuply',
	},  {
		title: '市值总量',
		field: 'maxSupply',
	},  {
		title: '24h涨跌幅',
		field: 'percentChange24h'
	}];
	buildList({
		columns: columns,
		pageCode: '628341'
	});
	
});