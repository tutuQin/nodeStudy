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

 function User ( id, name, age){
     this.id =id;
     this.name =name;
     this.age=age;
     this.enter = function (){
         console.log(this.name+'进入图书馆')
     }
 }
module.exports = User