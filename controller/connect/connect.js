const mongoose = require('mongoose')

const URI='mongodb+srv://JaiSinghal:mongopassword@cluster0.lysxx.mongodb.net/listify?retryWrites=true&w=majority'
const connect = function (){
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('Connected to mongoDB database')
}

module.exports = connect