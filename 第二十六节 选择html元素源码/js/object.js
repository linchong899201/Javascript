(function(){
	'use strict';

	var myObject = {};

	//对象的构造函数方法
	console.log(myObject.constructor);

	//对象继承的属性方法
	console.log(myObject.hasOwnProperty('constructor'));

	console.log(myObject.hasOwnProperty('testProperty'));

	//对象自己的属性
	myObject.testProperty = 'test';

	console.log(myObject.hasOwnProperty('testProperty'));

	//对象的Enumerable属性
	console.log(myObject.propertyIsEnumerable('constructor'));

	console.log(myObject.propertyIsEnumerable('testProperty'));

	//对象返回字符串形式方法
	console.log(myObject.toString());

	console.log(['test','something'].toString());

	//显示对象创建的构造函数，调用对象构造函数原型的string方法
	console.log(Object.prototype.toString.call([]));

}());