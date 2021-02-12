const express = require("express")
const Post = require("./models/Comment")
const Model = require("./models/Models")
const uploadFile = require('./helpers/helpers')
const router = express.Router()
const Multer = require('multer');

const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 100 * 1024 * 1024, // Maximum file size is 10MB
    },
});

router.post('/uploads', multer.single('file'), async (req, res, next) => {
    try {
        const myFile = req.file
        const imageUrl = await uploadFile(myFile)

        res
            .status(200)
            .json({
                message: "Upload was successful",
                data: imageUrl
            })
    } catch (error) {
        next(error)
    }
})
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

router.get("/models/:modelid", async (req, res) => {
    const model = await Model.findOne({ modelid: req.params.modelid })
    res.send(model)
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