var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema ({
    title: String,
    description: String,
    price: Number,
    quantity: Number,
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    userId: {type: Schema.Types.ObjectId, ref: "User"}
}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema);