(function(){
		'use strict';
		var array = ['a','b','c'];

		//数组的长度
		console.log(array.length);
		//添加项目到数组最后面
		array.push('four');
		console.log(array);

		//添加项目到数组最前面
		array.unshift('zero');
		console.log(array);

		//删除最后一个数组项目（item）
		array.pop();
		console.log(array);

		//删除第一个数组项目
		array.shift();
		console.log(array);

		//删除数组的项目，跟一个参数
		//array.splice(0);
		//console.log(array);

		//删除两个项目，留下一个项目，传递两个参数
		//array.splice(0,2);
		//console.log(array);

		//替换数组项目，传递三个参数

		//array.splice(0,3,'aa','bb','cc');
		//console.log(array);

		//reverse:把数组项目倒过来
		array.reverse();
		console.log(array);

		//排序
		array.sort();
		console.log(array);

		console.log(['a','C','b'].sort());

		console.log([20,10000,3].sort(function(a,b){
			return a-b;
		}));

		console.log(['a','C','b'].sort(function(a,b){
			var caselessA = a.toLowerCase(),
			caselessB = b.toLowerCase();

			if(caselessA < caselessB){
				return -1;
			}else if (caselessA	=== caselessB){
				return 0;
			}else{
				return 1;
			}
		}))

		//sort 数组的对象object

		console.log([{name:'a'},{name:'C'},{name:'b'}].sort(function(a,b){
			var caselessA = a.name.toLowerCase(),
			caselessB = b.name.toLowerCase();

			if(caselessA < caselessB){
				return -1;
			}else if (caselessA	=== caselessB){
				return 0;
			}else{
				return 1;
			}
		}))

		//数组转化成字符
		console.log(array.join());

		console.log(array.join(''));

		//找项目的指数

		console.log(array.indexOf('b'));

		//获取数组的项目
		console.log(array.slice(1));

		console.log(array.slice(0,-1));

		//for each方法
		array.forEach(function(value,index){
			console.log('数组项目的指数' + index + '对应的值' + value)
		});

		//every方法

		console.log(array.every(function(value){
			return typeof value === 'string';
		}));

		//filter方法
		console.log(['a',1,'b',2,'c',3].filter(function(value){
			return typeof value !== 'number';
		}));

		//map方法

		console.log(array.map(function(value){
			return value.toUpperCase();
		}));

		//reduce方法

		console.log([1,2,3].reduce(function(total,value){
			return total += value;
		}));

		//reduce修改

		console.log([1,2,3].reduce(function(total,value){
			return total += value;
		},4));

}());