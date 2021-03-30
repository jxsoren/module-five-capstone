const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

// middleware functions
app.use(express.json())
app.use(morgan('dev'))

// connect to database
mongoose.connect('mongodb://localhost:27017/group-db',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, 
    () => console.log("Connected to group-db database")
)

// routes
app.use("/plants", require("./routes/plantRouter.js"))

// err handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// server listen
app.listen(9010, () => {
    console.log('express server is up and running!')
})