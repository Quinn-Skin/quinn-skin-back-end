const router = require("express").Router()
const Reviews = require("../models/Reviews")
const Joi = require('joi')

const ReviewsSchema = Joi.object({
    fullName: Joi.string().required(),
    review: Joi.string().required(),
})

router.get("/", async (req, res) => {
    await Reviews.findAll().then((Reviews) => {
        res.json({
            status: 200,
            Reviews
        })
    })
})

router.get("/:id", async (req, res) => {
    await Reviews.findOne({ where: { id: req.params.id } }).then((Review) => {
        res.json({
            status: 200,
            Review
        })
    })
})

router.get("/product/:id/", async (req, res) => {
    await Reviews.findAll({ where: { productId: req.params.id } }).then((Reviews) => {
        res.json({
            status: 200,
            Reviews
        })
    })
})


router.post("/product/:id/", async (req, res) => {
    await ReviewsSchema.validateAsync(req.body).then(async () => {
        await Reviews.create({
            fullName: req.body.fullName,
            review: req.body.review,
            productId: req.params.id
        }).then((Review) => {
            res.json({
                status: 200,
                Review
            })
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err) => {
        res.send(err)
    })
})

router.put("/:id", async (req, res) => {
    await ReviewsSchema.validateAsync(req.body).then(async () => {
        await Reviews.findOne({ where: { id: req.params.id } }).then(async (Review) => {
            await Review.update({
                fullName: req.body.fullName,
                review: req.body.review,
            }).then((Review) => {
                res.json({
                    status: 200,
                    Review
                })
            }).catch((err) => {
                res.send(err)
            })
        })
    }).catch((err) => {
        res.send(err)
    })
})

router.delete("/:id", async (req, res) => {
    await Reviews.findOne({ where: { id: req.params.id } }).then((Review) => {
        if (Review) {
            Review.destroy().then(() => {
                res.json({
                    status: 200,
                    message: "Review deleted succefully"
                })
            }).catch((err) => {
                res.send(err)
            })
        } else {
            res.json({
                status: 400,
                message: "this Review does not exist"
            })
        }
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router