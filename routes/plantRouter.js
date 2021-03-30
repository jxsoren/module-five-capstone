const express = require('express')
const plantRouter = express.Router()
const PlantModel = require('../models/plantModel.js')

plantRouter.route('/')
    .get((req, res, next) => {
        PlantModel.find((err, plants)=> {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(plants)
        })
    })
    .post((req, res, next) => {
        const newPlant = new PlantModel(req.body)
        newPlant.save((err, savedPlant) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedPlant)
        })

    })

plantRouter.route('/:plantId')
    .put((req, res, next) => {
        PlantModel.findOneAndUpdate(
            { _id: req.params.plantId },
            req.body,
            { new: true },
            (err, updatedItem) => {
                if(err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedItem)
            }
        )
    })
    .delete((req, res, next) => {
        PlantModel.findOneAndDelete(
            { _id: req.params.plantId },
            (err, deletedItem) => {
                if(err) {
                    res.send(500)
                    return next(err)
                }
                return res.status(200).send(`you have succesfully deleted ${deletedItem.name} from your Plant Inventory`)
            }
        )
    })


module.exports = plantRouter