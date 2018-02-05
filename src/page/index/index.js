
// var jq = require('jquery');
// console.log(jq);

// console.log('hello INDEXINDEX');



// var $$ = require('jquery');
// console.log($$);
// $$(function(){
// 	$$('body').html('index hello ~~~~');
// });	
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

navSide.init({
	name : 'about'
});
// _mm.request({
// 	url:'/product/list.do?keyword=1',
// 	success:function(res){
// 		console.log(res);
// 	},
// 	error:function(errMsg){
// 		console.log(errMsg);
// 	}
// });

// console.log(_mm.getUrlParam('test'));

// require('page/common/nav-simple/index.js');
