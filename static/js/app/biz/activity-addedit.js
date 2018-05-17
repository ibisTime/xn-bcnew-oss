$(function() {
    var code = getQueryString('code');
    var view = getQueryString('v');
    
    var addressList = {
			province : '',
			city : '',
			district : '',
			address : '',
			longitude : '',
			latitude : ''
		};
    
    var fields = [{
        field: 'title',
        title: '标题',
        required: true,
    }, {
        field: 'contactMobile',
        title: '联系电话',
        tm: true,
        required: true,
    }, {
        field: 'advPic',
        title: '广告图',
        type:'img',
		single: true,
        required: true,
    }, {
        field: 'price',
        title: '价格',
        amount: true,
        formatter: moneyFormat,
        required: true,
    }, {
        field: 'maxCount',
        title: '最大报名人数',
        number: true,
        required: true,
    }, {
        field: 'startDatetime',
        title: '开始时间',
        type: 'datetime',
        formatter: dateTimeFormat,
        required: true,
    }, {
        field: 'endDatetime',
        title: '结束时间',
        type: 'datetime',
        formatter: dateTimeFormat,
        required: true,
    }, {
        field: 'address',
        title: '导航地址',
        type: 'chooseMap',
        required: true,
    }, {
        field: 'meetAddress',
        title: '详细地址',
        required: true,
    }, {
		title: '内容',
		field: 'content',
		type: 'textarea',
		required: true
    }, {
        field: 'longitude',
        title: '经度',
        required: true,
        hidden: true
    }, {
        field: 'latitude',
        title: '纬度',
        required: true,
        hidden: true
    }];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '628506',
        addCode: '628500',
        editCode: '628502',
        beforeSubmit: function(data) {
        	data.applyUser = getUserId();
        	return data;
        }
    });
    
    addListener();
    
    function addListener(){
    	$("#chooseMap").on('click',function(){
            var data = $('#jsForm').serializeObject();
            var longitude = '';
            var latitude = '';
            
            //获取经纬度
			longitude = data.longitude;
			latitude = data.latitude;
    		
    		loadMap(longitude,latitude)
    		
    		$("#mapWrap").removeClass("hidden");
    	})
    	
    	$(".chooseMap-inputWrap .chooseMap-mask").click(function(){
    		$("#chooseMap").click()
    	})
    	
    	//地图弹窗按钮-关闭
    	$("#mapWrap .icon-close").click(function(){
    		$("#mapWrap").addClass("hidden")
    	})
    	
    	//地图弹窗按钮-取消
    	$("#mapWrap .closeBtn").click(function(){
    		$("#mapWrap").addClass("hidden")
    	})
    	
    	//地图弹窗按钮-确定
    	$("#mapWrap .subBtn").click(function(){
    		var address = addressList.province + addressList.city + addressList.district + addressList.address;
    		$("#address").val(address);
    		$("#address").removeClass("error");
    		$("#address").siblings("span").hide().removeClass("error");
    		$("#longitude").val(addressList.longitude);
    		$("#latitude").val(addressList.latitude);
    		$("#mapWrap").addClass("hidden")
    	})
    	
    	
    }
    
		//加载地图
	function loadMap(lon,lat){
	    var  marker;
	    
		var longitude = lon;
		var latitude = lat;
		
		 //初始化地图对象，加载地图
	    //初始化加载地图时，若center及level属性缺省，地图默认显示用户当前城市范围
	    var map = new AMap.Map('submitMap', {
	        resizeEnable: true,
	        zoom: 7
	    });
	    //地图中添加地图操作ToolBar插件
	    map.plugin(['AMap.ToolBar'], function() {
	        //设置地位标记为自定义标记
	        var toolBar = new AMap.ToolBar();
	        map.addControl(toolBar);
	    });
		
		//判断是否有经纬度
		if(longitude&latitude){
			regeocoder([longitude,latitude])
		}
		
		//输入提示
	    var autoOptions = {
	        input: "tipinput"
	    };
	    var auto = new AMap.Autocomplete(autoOptions);
	    var placeSearch = new AMap.PlaceSearch({
	        map: map
	    });//构造地点查询类
	    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
	    function select(e) {
	        if (e.poi && e.poi.location) {
	            map.setZoom(15);
	            map.setCenter(e.poi.location);
	            regeocoder([ e.poi.location.getLng(),e.poi.location.getLat()]);
	        }
	    }
		
		//为地图注册click事件获取鼠标点击出的经纬度坐标并标点
	    var clickEventListener = map.on('click', function(e) {
			regeocoder([ e.lnglat.getLng(),e.lnglat.getLat()])
	    });
		
		//正向地理解析（地址→经纬度）
	    function geocoder(ad) {
	        var geocoder = new AMap.Geocoder({
	            radius: 1000 //范围，默认：500
	        });
	        //地理编码,返回地理编码结果
	        geocoder.getLocation(ad, function(status, result) {
	            if (status === 'complete' && result.info === 'OK') {
			        var geocode = result.geocodes[0];
	            	regeocoder([geocode.location.getLng(),geocode.location.getLat()]);
	            }
	        });
	    }
		//标点
	    function addMarker(pt) {
	    	map.clearMap()
	        marker = new AMap.Marker({
	            map: map,
	            position: pt
	        });
	    }
		//逆地理编码（经纬度→地址）
	    function regeocoder(pt) {  
	        var geocoder = new AMap.Geocoder({
	            radius: 1000,
	            extensions: "all"
	        });        
	        geocoder.getAddress(pt, function(status, result) {
	            if (status === 'complete' && result.info === 'OK') {
	            	var addComp = result.regeocode.addressComponent
	            	var address = result.regeocode.formattedAddress.split(addComp.district)[1]
	            	addressList={
						province : addComp.province,
						city : addComp.city,
						district : addComp.district,
						address : address,
						longitude : pt[0],
						latitude : pt[1]
					}
	            }
	        });        
	        addMarker(pt);
	        map.setFitView();
	    }
	    
	}
    
    
    
    
    
    
});