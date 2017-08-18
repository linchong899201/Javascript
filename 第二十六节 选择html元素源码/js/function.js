(function(){
	'use strict';

	function testFunction(arg1,arg2){
		return arg1+arg2;
	}

	console.log(testFunction.length);

	//改进

	var testFunction = function testFunction(arg1,arg2){
		return arg1+arg2;
	}

	console.log(testFunction.length);

	//call方法

	var person = {
		name:'peter',
		job:'developer'
	}

	//用新函数介绍这个人

	function introduce(){
		console.log('你好，我的名字是' + this.name + ',我是一个' + this.job );
	}

	//返回type错误
	//因为这个函数这个对象没有设置
	//所以这个this.+name是未定义的

	//introduce();


	//call方法，设置这个函数的对象，并允许创建正确消息

	introduce.call(person);

	//改进：“inductee”的参数并将其合并到消息中

	function introduce(inductee){
		console.log('你好' + inductee +'! 我的名字是' + this.name + ',我是一个' + this.job );
	}

	introduce.call(person,'小明');

	//用chat新函数调用或者引用聊天传递内容
	function chat(respondent,subject){
		console.log('所以' + respondent + ',关于' + subject + '?是个好话题' + this.job + '像我？');
	}

	////用engage新函数
	function engage(mode,object,args){
		mode.apply(object,args);
	}

	//第一个参数(mode)是我们要调用的函数的名称
	//第二个(object)是这个函数内部使用的对象
	//第三个参数是包含其余参数的数组，那么我们然后第三个参数是一个数组，其中包含我们要传递给其他函数的其余参数。
	
	//introduce函数
	engage (introduce,person,['Fred']);

	//chat函数
	engage(chat,person,['AI','new IDE'])

	//bind方法

	function addToCart(price){
		if (!this.total){
			this.total = 0;
		}
		this.total += price;
		return this.name + '购物车￥' + this.total;
	}

	//bind一个对象
	var dansCart = addToCart.bind(person);

	console.log(dansCart(50));
	console.log(dansCart(100));

	//购物车每个项目添加手续费


	function addToCart(price,fee){
		if (!this.total){
			this.total = 0;
		}
		this.total += price += fee || 0;
		return this.name + '购物车￥' + this.total;
	}

	var dansCart = addToCart.bind(person,1);

	console.log(dansCart(50));
	console.log(dansCart(100));

	//做个交换

	function addToCart(fee,price){
		if (!this.total){
			this.total = 0;
		}
		this.total += price += fee || 0;
		return this.name + '购物车￥' + this.total;
	}

	//console.log(fee);

	//var dansCart = addToCart.bind(person);

	//console.log(dansCart(50));
	//console.log(dansCart(100));

	var bob = {
		name:'Bob'
	}

	var bobsCart = addToCart.bind(bob,5);

	console.log(bobsCart(50));
	console.log(bobsCart(100));

}());