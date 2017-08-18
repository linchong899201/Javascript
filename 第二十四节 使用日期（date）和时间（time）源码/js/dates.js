(function(){
	'use strict';
	//获取当前刷新浏览器时间
	var now = new Date();
	console.log(now);

	//忘记写new关键词
	var now = Date();
	console.log(typeof Date());

	//解析单个数字代表毫秒数

	var partyTime = new Date(946684799000);
	console.log(partyTime);

	//将一个字符串传递给date构造函数

	var peter = new Date('september 29 1999');
	console.log(peter);

	//字符串无效日期

	var notADate = new Date('无效日期');
	console.log(notADate);

	//我们一个日期对象
	var specialDate = new Date('2017,2,22');
	console.log(specialDate);

	//使用getter获取日，月或全年获得当地时间的月份年份

	console.log(specialDate.getDate());
	console.log(specialDate.getMonth());
	console.log(specialDate.getFullYear());

	//UTC
	console.log(specialDate.getUTCDate());
	console.log(specialDate.getUTCMonth());
	console.log(specialDate.getUTCFullYear());

	//day
	console.log(specialDate.getDay());
	console.log(specialDate.getUTCDay());

	//toString方法，获取字符串格式的完整日期和时间
	console.log(specialDate.toString());
	console.log(specialDate.toUTCString());
	console.log(specialDate.toDateString());

	//toString本地时间格式
	console.log(specialDate.toTimeString());

	//ISO 8601扩展格式的日期字符串
	console.log(specialDate.toISOString());

	//toLocaleString,toLocaleDateString,toLocaleTimeString

	console.log(specialDate.toLocaleString());
	console.log(specialDate.toLocaleDateString());
	console.log(specialDate.toLocaleTimeString());








}());