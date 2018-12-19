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

module.exports = { 
    login:function(req,res){
        res.write('我是登录')
    },
    zhuce:function(req,res){
        res.write('我是注册')
    },
}