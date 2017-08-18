(function(){
	'use strict';

	console.log(document.getElementById('mainHeading'));

	console.log(document.getElementsByClassName('heading'));

	console.log(document.getElementsByTagName('header'));

	console.log(document.getElementsByName('myName'));

	var mainHeading = document.getElementById('mainHeading');
	console.log(mainHeading.id);

	var subHeading = document.getElementsByClassName('heading')[1];
	console.log(subHeading.id);

	//更改ID属性

	mainHeading.id = 'firstHeading';
	console.log(mainHeading.id);
	console.log(document.getElementById('firstHeading'));

	//获取或设置元素的class属性
	console.log(subHeading.className);

	//add方法添加新的className

	subHeading.classList.add('special');
	console.log(document.getElementsByClassName('subHeading'));

	//remove方法移除className

	subHeading.classList.remove('special');
	console.log(document.getElementsByClassName('subHeading'));

	//contains方法检查是否包含属性类

	console.log(subHeading.classList.contains('special'));

	//正在使用什么类型的元素
	console.log(mainHeading.tagName);

	console.log(mainHeading.nodeType);

	console.log(mainHeading.childNodes[0].nodeType);

	//替换一个元素的HTML内容给它一个新的DOM结构与新的子元素

	mainHeading.innerHTML = '<span>'+ mainHeading.innerHTML + '</span>';
	console.log(mainHeading.innerHTML);

	mainHeading.outerHTML = '<p>'+ mainHeading.outerHTML + '</p>';
	console.log(mainHeading.outerHTML);

	//textContent改变文本内容
	subHeading.textContent = '我测试来了。';

	var heading = document.getElementsByTagName('header')[0];

	console.log(heading.childNodes.length);

	var x,length;

	for (x = 0,length = heading.childNodes.length;x<length;x+=1){
		if (heading.childNodes[x].nodeType === 1){
			console.log('我是一个' + heading.childNodes[x].tagName)
		}
	}

	console.log(heading.children.length);

	console.log(heading.childNodes[0].nodeName);

	console.log(heading.children[0].nodeName);

	console.log(heading.firstChild.nodeName);

	console.log(subHeading.parentNode.nodeName);

	console.log(heading.firstChild.nextSibling.nodeName);

	console.log(heading.lastChild.previousSibling.nodeName);

	//appendChild添加元素的方法

	document.body.appendChild(subHeading);

	document.body.insertBefore(subHeading,heading);

	//removeChild删除元素的方法
	document.body.removeChild(heading);
	if(document.body.contains(heading)){
		document.body.removeChild(heading);
	}

	//replaceChild替换元素方法

	var substitute  = document.createElement('i');
	substitute.textContent = '我们已经被替换了';
	document.body.replaceChild(substitute ,subHeading);
}());