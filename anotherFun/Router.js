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
 * node模块调用
 * 
 */
var optfile = require("./optFlile.js")//先导入其他模块

function callback1 (req,res){
         res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})//定义请求的头部
        function callback(data){
            res.write(data);
            res.end('')
        }
        return callback
}
module.exports = { 
    login:function(req,res){
        res.write('我是登录')
    },
    zhuce:function(req,res){
        res.write('我是注册')
    },
    writefile:function(req,res){//写文件
        function callback(data){
            console.log('回调',data)
            res.write(data);
            res.end('')
        }
        optfile.writefile('./views/one.txt','今天天晴00',callback)
    },
    logins:function(req,res){
        callback=callback1(req,res)
        optfile.readfile('./views/logins.html',callback)
    },
    showImage:function(req,res){
        res.writeHead(200,{'Content-Type':'image/jpeg; charset=utf-8'})//定义请求的头部'image/jpeg将图片转化为二进制
        optfile.readImg('./imgs/test.png',res)
    }

}