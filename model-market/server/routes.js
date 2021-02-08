const express = require("express")
const Post = require("./models/Comment")
const Model = require("./models/Models") // new
const router = express.Router()

// Get all posts
router.get("/comments", async (req, res) => {
    Post.find()
        .then(comments => res.json(comments))
        .catch(err => console.log(err))
})


router.post("/comments", async (req, res) => {
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        body: req.body.body,
        modelid: req.body.modelid,
        postid: req.body.postid,
    })
    await post.save()
    res.send(post)
})

router.get("/comments/:id", async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id })
    res.send(post)
})

router.get("/models", async (req, res) => {
    Model.find()
        .then(models => res.json(models))
        .catch(err => console.log(err))
})


router.post("/models", async (req, res) => {
    const post = new Model({
        modelid: req.body.modelid,
        img: req.body.img,
        desc: req.body.desc,
        title: req.body.title,
        tags: req.body.tags,
        faces: req.body.faces,
        cardDetails: {
            modelDetails: req.body.cardDetails.modelDetails,
            intendedUse: req.body.cardDetails.intendedUse,
            factors: req.body.cardDetails.factors,
            metrics: req.body.cardDetails.metrics,
            trainEvalData: req.body.cardDetails.trainEvalData,
            considertations: req.body.cardDetails.considerations,
        },
        resettags: req.body.resettags,
        github: req.body.github,
        modelurl: req.body.modelurl

    })
    await post.save()
    res.send(post)
})

router.get("/models/:id", async (req, res) => {
    const Model = await Model.findOne({ _id: req.params.id })
    res.send(Model)
})
module.exports = router