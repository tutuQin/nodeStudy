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
 * node服务的路由：实现机制主要是node的server首先从浏览器的URL拿到Url
 * 其次用正则匹配到根路径的文件名称，也就是路由，
 * 然后调用一个叫router.js的文件里面对应的方法，
 * 然后在对应的方法里面读取html文件显示在页面上
 * 
 */
var http =require('http') //从node内引入http
var url = require('url') //从node内引入url用于获取当前浏览器的url
var router = require("./anotherFun/Router.js")//先导入其他模块
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})//定义请求的头部
    if(request.url !== "/favicon.ico"){//node请求会自动执行一遍/favicon.ico这个资源的请求，所以为防止每一次请求都会请求两次就加上这个判断，清除第二次请求
        var pathname =url.parse(request.url).pathname; //拿到url上的根目录字符串
        pathname = pathname.replace(/\//,'');//去除根目录字符串的/
        router[pathname](request,response)
        response.end('');//请求完成后必须终止请求，否则浏览器会一直处于请求状态
    }  
}).listen(8000);
