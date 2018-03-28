$(function() {
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '交易所',
		field: 'exchangeCname',
		formatter: function(v,data){
			if(data.exchangeEname){
				return data.exchangeCname+"("+data.exchangeEname+")"
			}else{
				return v;
			}
		},
        search:true
	},{
		title: '币种',
		field: 'coinSymbol',
        type: 'select',
		listCode:'628307',
        keyName: 'symbol',
        valueName: '{{cname.DATA}}({{symbol.DATA}})',
        search: true,
	},{
		title: '参考币种',
		field: 'toCoinSymbol',
	},{
		title: '最新价',
		field: 'lastPrice',
	},{
		title: '最新人民币',
		field: 'lastCnyPrice',
	},{
		title: '涨跌幅',
		field: 'changeRate',
	},  {
		title: '24h交易量',
		field: 'volume',
	}];
	buildList({
		columns: columns,
		pageCode: '628345'
	});
	
});