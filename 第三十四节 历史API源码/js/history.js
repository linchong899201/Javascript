(function(){
	'use strict';

	function loadPage(xhr,urlToLoad){
		xhr.onload = function(){
			var response = xhr.responseText;
			parseAndInsertPage(response);
			window.history.pushState({pageContent:response},'JavaScript基础入门',urlToLoad);
		}

		xhr.open('GET',urlToLoad,true);
		xhr.send();
	}

	function parseAndInsertPage(pageString){
		var bodyTemp = pageString.split('<head>')[1],
			body = bodyTemp.split('</html>')[0] || pageString;
		document.body.outerHTML = body;

	}

	document.addEventListener('click',function(e){
		if(e.target.nodeName === 'A'){
			e.preventDefault();
			var xhr = new XMLHttpRequest,
				newUrl = e.target.href;
			loadPage(xhr,newUrl);

			window.history.pushState({pageContent:document.body.outerHTML},'JavaScript基础入门',document.location.href);
		}
	});

	window.addEventListener('popstate',function(e){
		if(e.state && typeof e.state.pageContent === 'string'){
			parseAndInsertPage(e.state.pageContent);
		}
	})
}())