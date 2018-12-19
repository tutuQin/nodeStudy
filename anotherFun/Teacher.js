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
 * node模块调用继承
 * 
 */
var User = require ('./User')
 function Teacher ( id,name,age){
     User.apply(this,[id,name,age])//当前继承user这个类
     this.teach=function(res){
        res.write(this.name+'讲课')
     }
 }
module.exports = Teacher