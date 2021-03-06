/*
 * File: nodeHello.js
 * Project: node
 * File Created: Monday, 17th December 2018 2:05:25 pm
 * Author: YH (1147499565@qq.com)
 * -----
 * Last Modified: Monday, 17th December 2018 2:37:35 pm
 * Modified By: YH (1147499565@qq.com)
 * -----
 * Description
 * node写文件
 */
var http =require('http') //从node内引入http
var url = require('url') //从node内引入url用于获取当前浏览器的url
var optFile = require("./anotherFun/optFlile.js")//先导入其他模块
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'image/jpeg; charset=utf-8'})//定义请求的头部'image/jpeg将图片转化为二进制
    if(request.url !== "/favicon.ico"){  //node请求会自动执行一遍/favicon.ico这个资源的请求，所以为防止每一次请求都会请求两次就加上这个判断，清除第二次请求
        optFile.readImg('./imgs/test.png',response)
    }  
}).listen(8000);
