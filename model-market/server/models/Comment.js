const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    modelid: {
        type: String,
        required: true
    },
    postid: {
        type: Number,
        required: true
    },

})
module.exports = mongoose.model("Comment", commentSchema)
