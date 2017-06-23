/*评论区要的内容*/


//以文件形式存储数据库模型骨架(存储当前文档所包含的key)，
//建立一个映射（与数据库集合属性的映射）
var mongoose = require("mongoose");

var CommentSchema = mongoose.Schema({
	title: String,
	content: String,
	author: String,
	img:String

});

//把自己创建的这个模块暴露出来，供使用。
module.exports = CommentSchema