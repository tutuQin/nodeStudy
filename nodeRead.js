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
 * node服务读取文件,
 */
var http =require('http') //从node内引入http
var optFile = require("./anotherFun/optFlile.js")//先导入其他模块
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})//定义请求的头部
    response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})//定义请求的头部
    if(request.url !== "/favicon.ico"){  //node请求会自动执行一遍/favicon.ico这个资源的请求，所以为防止每一次请求都会请求两次就加上这个判断，清除第二次请求
        // // 同步读取
        // optFile.readfileSync('./views/login.html') 
        // response.end('OK'); //请求完成后必须终止请求，否则浏览器会一直处于请求状态,没有协议尾
        // console.log('主程序执行完毕')

        // 异步读取
        function callback(data){
            response.write(data)
            response.end(''); //请求完成后必须终止请求，否则浏览器会一直处于请求状态,没有协议尾
        }
        optFile.readfile('./views/login.html', callback)
        console.log('主程序执行完毕')

    }  
}).listen(8000);
