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
 * node文件读取
 * 
 */
var fs = require('fs')//从node引入文件读取方法
module.exports = { 
    readfileSync:function(path){ //同步读取
        var data = fs.readFileSync(path,'utf-8');
        console.log(data);//读取到的data
        console.log('同步方法执行完毕')
    },
    readfile:function(path,callback){
        fs.readFile(path,function(err,data){
            if(err){
                console.log(err)
            }else{
                console.log(data.toString())
                callback(data)
            }
        })
    },
    writefile:function(path,data,callback){ //写文件
        fs.writeFile(path,data,function(err){
            if(err){
                throw err
            }
            console.log('文件已保存')

            callback('写文件成功')
        })
    },
    writeFileSync:function(path,data){
        fs.writeFileSync(path,data);
        console.log('同步写文件完成')
    },
    readImg:function(path,res){ //binary表示读取图片的二进制
        fs.readFile(path,'binary',function(err,fileData){
            if(err){
                console.log(err)
                return
            }else{
               res.write(fileData,'binary');
               res.end()
            }
        })
    },
   
}