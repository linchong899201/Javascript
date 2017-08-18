(function(){
	'use strict';
	if (1+1 === 3){
		console.log('这个表达式是true');
	}else{
		console.log('这个表达式是false')
	}

	if(true === false){
		console.log('我们不能看到');
	}else{
		console.log('我们总是看到');
	}

	var color = 'red';
	if(color === 'blue'){
		console.log('是蓝色');
	}else if(color === 'green'){
		console.log('是绿色');
	}else{
		console.log('是红色');
	}

	if(1){
		console.log('我们能够看到它');
	}

	var array = ['item1','abc'];
	if (array.length){
		console.log(array[1])
	}

	(true===false)?console.log('是这个'):console.log('不是这个');

	(true)?console.log('短头发'):console.log('长头发');
}());

var switcher = 'two';

switch(switcher){
	case 'one':
		console.log('one');
		break;

	case 'two':
		console.log('two');
	break;
}

//没有break的情况
var switcher = 'one';
switch(switcher){
	case 'one':
		console.log('one');
	case 'two':
		console.log('two');
	break;
}


//default的情况
var switcher = 'three';
switch(switcher){
	case 'one':
		console.log('one');
		break;

	case 'two':
		console.log('two');
	break;

	default:
		console.log(switcher);
}


var anArray=['item1','item2','item3'];
for(var x = 0;x < anArray.length;x++){
	console.log(anArray[x]);
};

//存在变量
var anArray = ['item1','item2','item3'];
for (var x=0,y = anArray.length; x<y;x++){
	console.log(anArray[x]);
}

//解决表达式会返回一个与变量实际值不同的值
var anArray = ['item1','item2','item3'];
for (var x=0,y = anArray.length; x<y;x+=1){
	console.log(anArray[x]);
}

var anObject = {
	prop1:'property1',
	prop2:'property2',
	prop3:'property3'
};

for (var prop in anObject){
	console.log(anObject[prop]);
}


for (var prop in anObject){
	if(anObject.hasOwnProperty(prop)){
		console.log(anObject[prop]);
	}
}

//while循环语句
var limit = 0;
while(limit < 5){
	console.log(limit +=1);
}

//用break提前停止循环
var limit = 0;
while (limit < 5){
	if (limit === 3){
		break;
	}
	console.log(limit +=1);
}

//do while循环语句
var condition = true;
do {
	console.log('执行一次');
	break;
}while(condition);


//更便于理解while和do while的例子

var x = 0;

do{
	console.log(x);
}while(x>0);

while (x>0){
	console.log(x);
}

while (x<5){
	console.log(x++);
}