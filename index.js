const express = require('express')
const app = express()
const router = require('./controller/router')
const connect = require('./controller/connect/connect')
const cors = require('cors')

var corsOptions = {
    origin: 'https://jaisinghal02.github.io',
}
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(corsOptions))
app.use(router)
app.listen(4000,()=>{
    console.log(`Listening on port ${4000}`)
    connect()
})