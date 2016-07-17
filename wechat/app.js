'use strict'

var Koa = require('koa')
var wechat = require('./wechat/g')
var path = require('path')
var util = require('./libs/util')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var config = {
	wechat: {
		appID:'wxf60a363abf36e77e',
		appSecret:'2be416d8e589f14b9a68d6cf7f8289d5',
		token:'imoocisareallyyamzingplacetolearn',
		getAccessToken:function(){
			return util.readFileAsync(wechat_file)
		},
		saveAccessToken:function(data){
			data = JSON.stringify(data)
			return util.writeFileAsync(wechat_file,data)
		}

	}
}

var app = new Koa()

app.use(wechat(config.wechat))

app.listen(1234)
console.log('listening:1234')