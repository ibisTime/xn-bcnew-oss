$(function() {
    var exchangeEname = getQueryString('exchangeEname');
	var columns = [{
		field : '',
		title : '',
		checkbox : true
    }, {
		title: '交易所英文名',
		field: 'exchangeEname',
	},{
		title: '交易所中文名',
		field: 'exchangeCname',
	},{
		title: '基础币种',
		field: 'symbol',
        search: true
	},{
		title: '计价币种',
		field: 'toSymbol',
        search: true
	}];
	buildList({
		columns: columns,
		pageCode: '628325',
        searchParams: {
			exchangeEname:exchangeEname
        }
	});
	$('.tools .toolbar').html('<li style="display:block;" id="backBtn"><span><img src="/static/images/t01.png"></span>返回</li>');
    $('#backBtn').on('click', function() {
        goBack();
    });
	
	
});