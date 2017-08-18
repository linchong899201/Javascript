

//改进setInterval
(function(){
	'use strict';

	function log(message){
		console.log('这种方法更好好！');
	}
	setTimeout (function(){
		log('最好！');
	},1000);

	//setInterval

	function pulse(){
		console.log('铛，铛');
		counter +=1;

		if(counter ===5){
			clearInterval(interval);
		}
	}

	var interval = setInterval(pulse,1000);
	counter = 0;
}());

