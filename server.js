const app = require('./app')

const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path : './config.env'})

const connection = mongoose.connect(process.env.CONNECTION).then(el=>{
    console.log('connection establish')
})

const server = app.listen(process.env.PORT, (req, res)=>{
    console.log(`The Backend is working at ${process.env.PORT}`)
})
server.requestTimeout = 30000;