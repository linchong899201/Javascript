(function(){
	'use strict';

	//addEventListener方法

	var subHeading = document.getElementsByTagName('h2')[0];
	var header = document.getElementsByTagName('header')[0];
	//subHeading.addEventListener('click',function(){
	//	console.log('h2被点击！')
	//})

	//在header添加监听事件
	header.addEventListener('click',function(e){
		console.log('这个' + e.target.nodeName + '被点击！')
		//不再派发事件
		e.stopPropagation();
	})

	//多个地方监听事件
	document.addEventListener('click',function(){
		console.log('有地方被点击！');
	})

	//preventDefault方法
	var anchor = document.createElement('a');
	anchor.textContent = 'Google';
	anchor.setAttribute('href','https://google.com');
	document.body.appendChild(anchor);

	anchor.addEventListener('click',function(e){
		e.preventDefault();
		console.log('不要跳转到谷歌首页')
	})

	//移除监听事件

	function mouseenterHandler(){
		console.log('鼠标在header元素里面');
	}
	header.addEventListener('mouseenter',mouseenterHandler);
	header.removeEventListener('mouseenter',mouseenterHandler);
}());


