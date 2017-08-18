(function(){
	'use strict';

	//pi圆周率

	console.log(Math.PI);

	//E欧拉常数

	console.log(Math.E);

	//ceil,floor,round

	//ceil:最接近的较大整数
	console.log(Math.ceil(1.3));

	//floor:最接近的较小整数
	console.log(Math.floor(1.9));

	//round:四舍五入
	console.log(Math.round(4.4));

	//max:在一系列数字中找到最大的数字
	console.log(Math.max(1,2,3));
	//NaN
	console.log(Math.max('a',2,3));

	//min:在一系列数字中找到最小的数字
	console.log(Math.min(1,2,3));
	//NaN
	console.log(Math.min(1,'b',3));

	//绝对值
	console.log(Math.abs(-7));

	//squirt方法找到任何数字的平方根
	//只能用正数，否则返回NaN
	console.log(Math.sqrt(64));

	//幂和指数方法
	console.log(Math.pow(8,5));

	//random生成0-1的任何随机数
	console.log(Math.random());

	//一个整数来表示
	console.log(Math.floor(Math.random()*10));

}())