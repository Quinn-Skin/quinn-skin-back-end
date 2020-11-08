const router = require("express").Router()
const Produts = require("../models/Produts")
const Joi = require('joi')

const ProdutsSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    url: Joi.string().required()
})


router.get("/", async (req, res) => {
    await Produts.findAll().then((Produts) => {
        res.json({
            status: 200,
            Produts
        })
    })
})


router.get("/:id", async (req, res) => {
    await Produts.findOne({ where: { id: req.params.id } }).then((Produt) => {
        res.json({
            status: 200,
            Produt
        })
    })
})


router.post("/", async (req, res) => {
    await ProdutsSchema.validateAsync(req.body).then(async () => {
        await Produts.create(req.body).then((Produt) => {
            res.json({
                status: 200,
                Produt
            })
        }).catch((err) => {
            res.send(err)
        })
    }).catch((err) => {
        res.send(err)
    })
})


router.put("/:id", async (req, res) => {
    await ProdutsSchema.validateAsync(req.body).then(async () => {
        await Produts.findOne({ where: { id: req.params.id } }).then(async (Produt) => {
            await Produt.update(req.body).then((Produt) => {
                res.json({
                    status: 200,
                    Produt
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
    await Produts.findOne({ where: { id: req.params.id } }).then((Produt) => {
        if (Produt) {
            Produt.destroy().then(() => {
                res.json({
                    status: 200,
                    message: "Produt deleted succefully"
                })
            }).catch((err) => {
                res.send(err)
            })
        } else {
            res.json({
                status: 400,
                message: "this Produt does not exist"
            })
        }
    }).catch((err) => {
        res.send(err)
    })

})

module.exports = router