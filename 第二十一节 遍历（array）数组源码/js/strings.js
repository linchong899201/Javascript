
(function(){
		'use strict';

		var testString = 'test string';
		//length:获取字符的长度
		console.log(testString.length);

		//split:将字符串转成数组
		console.log(testString.split('.'));

		//indexOf：搜索一个字符串是否包含一个字符

		console.log(testString.indexOf('t'));

		//indexOf:将搜索字符串作为参数传递给方法

		console.log(testString.indexOf('t',1));

		//lastIndexOf
		console.log(testString.lastIndexOf('t'));

		//toUpperCase变成大写
		console.log(testString.toUpperCase());

		//toLowerCase变成大写
		console.log(testString.toLowerCase());

		//substring选择字符串特定部分
		console.log(testString.substring(5));

		//substring选择字符串特定部分
		console.log(testString.substring(0,4));

		//slice选择字符串特定部分
		console.log(testString.slice(5));

		//slice选择字符串特定部分
		console.log(testString.slice(0,4));

		//substring的参数是负数
		console.log(testString.substring(-6));

		console.log(testString.substring(-2,2));

		//trim方法把
		//var trim =;
		var trimString = '   test   ';
		console.log(trimString.length);
		console.log(trimString.trim());
}());


