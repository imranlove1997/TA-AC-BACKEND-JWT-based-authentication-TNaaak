var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema ({
    content: String,
    bookId: {type: Schema.Types.ObjectId, ref: "Book", required: true} ,
    user: {type: Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Comment", commentSchema);