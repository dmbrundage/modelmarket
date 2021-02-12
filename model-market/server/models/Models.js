const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    desc: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    modelid: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    cardDetails: {
        modelDetails: {
            type: String,
        },
        intendedUse: { type: String, },
        factors: { type: String, },
        metrics: { type: String, },
        trainEvalData: { type: String, },
        considerations: { type: String, }

    },
    resettags: { type: Array },
    faces: { type: Array },
    github: {
        type: String
    },
    modelurl: {
        type: String
    }

})

module.exports = mongoose.model("Model", modelSchema)