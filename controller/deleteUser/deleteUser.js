const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.post('/',async(req,res)=>{
    const id = req.body.id
    try{
        const user = await User.findByIdAndDelete(id)
        res.status(200).send()
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router