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

