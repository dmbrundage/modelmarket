const express = require('express');
const router = express.Router()
const Comment = require('../models/Comment');
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => console.log(err))
})
router.post('/', (req, res) => {
    const { name, email, body, modelid, postid } = req.body;
    const newComment = new Comment({
        name: name, email: email, body: body, modelid: modelid, postid: postid
    })
    newComment.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})
module.exports = router