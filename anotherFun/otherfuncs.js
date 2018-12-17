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
 * node其他页面的函数
 * 
 */

// 支持一个函数的导出

// function fun2 (res){
//     console.log('我是fun2')
//     res.write('你好我是其他文件下的fun2')
// }
// module.exports = fun2//只支持导出一个函数

// 支持多个函数的导出
module.exports = { 
    fun2:function(res){
        console.log('我是fun2')
        res.write('你好我是fun2')
    },
    fun3:function(res){
        console.log('我是fun3')
        res.write('你好我是fun3')
    },
}