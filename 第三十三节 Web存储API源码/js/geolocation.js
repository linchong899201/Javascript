(function(){
	'use strict';

	function onPositionReceived(position){
		console.log(position);
	}

	function onPositionFailed(positionError){
		console.log(positionError);
	}

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(onPositionReceived,onPositionFailed,{
			timout:0,
		});
	}

	function onPositionChanged(position){
		console.log('定位新位置：' + position.coords.latitude + '，' + position.coords.longitude);
		navigator.geolocation.clearWatch(onPositionChanged);
	}

	var watch = navigator.geolocation.watchPosition(onPositionChanged,onPositionFailed);
	navigator.geolocation.clearWatch(onPositionChanged);
}())