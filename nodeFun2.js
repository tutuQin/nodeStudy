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
 * node服务内调用其他页面的函数function
 * 
 */
var http =require('http') //从node内引入http
var otherfun = require("./anotherFun/otherfuncs.js")//先导入其他页面的函数，注意其他页面的函数必须将这个函数导出
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})//定义请求的头部
    if(request.url !== "/favicon.ico"){//node请求会自动执行一遍/favicon.ico这个资源的请求，所以为防止每一次请求都会请求两次就加上这个判断，清除第二次请求
        // a用法
        otherfun.fun2(response)
        otherfun.fun3(response)

        // b用法
         otherfun['fun2'](response)
         otherfun['fun3'](response)//func2这里可以是放一个变量，此时就可以按条件调用函数
        //  ps:a.b用法本质都是对象的取值用法，因为导出的时候就是导出了一个对象
        response.end('');//请求完成后必须终止请求，否则浏览器会一直处于请求状态
    }  
}).listen(8000);
