var _mm = require('util/mm.js');

var _user = {
	//检查登陆状态
	checkLogin 	:  function(resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/logout.do'),
			method  : 'POST',
			success : resolve,
			error   : reject
		});
	},

	logout 	:  function(resolve,reject){
		_mm.request({
			url		: _mm.getServerUrl('/user/logout.do'),
			method  : 'POST',
			success : resolve,
			error   : reject
		});
	}
};
module.exports = _user;