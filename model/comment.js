
/*评论*/
var mongoose = require("mongoose");

var CommentSchema = require('../schema/comment');

// 第一个参数是集合名
var Comment = mongoose.model('comment',CommentSchema);

//创建好的一个用户集合的模型，这个模型就具有数据操作方法
module.exports = Comment;