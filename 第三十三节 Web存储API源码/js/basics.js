//console.log('点点滴滴');

/*
console.log('adfsads');
alert('adsfadsfads');
*/

//console.log('>3');
//alert('警告你要动手操作！');
var thedMeaningOfLearning = 30,foo=bac,bac,addd;

foo=bac;	

var number=1;

var string = 'hello';

var quotes = '"你好",他说';

var escaped = '"he doesn\'t" she said';

var array = [5,'abc',true];

delete array[0];

console.log(array);

var object = {
	myNumber:5,
	myString:'hello!'
};

delete object; //删除对象名

delete object.myNumber;//删除对象的属性

console.log(object);

console.log(object.myNumber);

console.log(object.myString);

var addition = 1 + 1;//addition = 2

var substraction = 1-1;//subsraction = 0

var multiplication = 5* 2;//multiplication = 10

var division = 5/2.5;//division = 2

var remainder = 5%2;

var postfix = 5;//后缀

var prefix = 5;//前缀

var additionAssignment = 1;
additionAssignment += 1;//additionAssignment = 2;

var substractionAssignment = 1;
substractionAssignment -= 1;//substractionAssignment = 0;

var mulitplicationAssignment = 2;
mulitplicationAssignment *= 2;
console.log(mulitplicationAssignment);

console.log(mulitplicationAssignment);

var divisionAssignment = 5;
divisionAssignment /=2.5;
console.log(divisionAssignment);

var modulusAssignment = 5;
modulusAssignment %=2;
console.log(modulusAssignment);

var precedence = 1+4*2;//9
console.log(precedence);

var precedence1 =(1+4)*2;
console.log(precedence1);

var object1 = ['hello','112','你好'];
var object2 = {
	property1:true,
	property2:'你好'
};
var string = 'hello';
var stringObject = new String('An object string');

function getThingByColor(color){
	var things = {
		red:'a red thing',
		green:'a green thing',
		blue:'a blue thing',
	};
	return things[color] || '对不起，这颜色不存在';
};


function myFunction(){
	console.log('你好，来自这个函数')
};

function myFunction1(message){
	console.log(message)
};

function myFunction2(message){
	console.log(message);
	return true;
};

var myOtherFunction1 = function(){
	console.log('function expression');
};

var myOtherFunction = function myOtherFunction(){
	console.log('function expression');
};

console.log(hoistedVariable);
var hoistedVariable = 'test';


console.log(undeclaredVariable);
var undeclaredVariable = '啊打发反对法';

(function (invokeImmediately){
	console.log('invoked automatically');
}());//立即调用

!function alsoInvokedAutomatically(){
	console.log('invoked automatically too');
}();//也是立即调用

var getCurrentUrl = window.location.href;
console.log(getCurrentUrl);

var global = -1;

function aFunction(){
	var local = 2;
	console.log(global);
	console.log(local);
}

(function(){
	'use strict';
	console.log(this);
}());

(function(){
	'use strict';
	console.log(this);
	//构造函数内的this对象把this实例对象的构造函数返回
	var object = {
		property:'我属于这个this',
		method:function(){
			return this.property;
		}
	}
	console.log(object.method());
}());

(function(){
	'use strict';
	console.log(this);
	//构造函数内的this对象把this实例对象的构造函数返回
	var object = {
		property:'我属于这个this',
		method:function(){
			return this.property;
		}
	}
	console.log(object.method());

	function Person(name){
		this.name = name;
	}

	var peter = new Person('Peter');

	console.log(peter.name);
}());


//预留的关键词不能够做identifer

//var function = 'aaaa';

var element = {
	'class':'abc-class'
}


someObject = {
	method: function(){
		this.something = 'something'
	}
}









