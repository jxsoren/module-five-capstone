const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantBluePrint = new Schema({
    name: {
        type: String,
        required: true
    },
    plant_type: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: Number
    }

})

module.exports = mongoose.model("PlantModel", plantBluePrint)