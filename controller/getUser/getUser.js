const express = require('express')
const router  = express.Router()
const User = require('../../models/user')


router.get('/',async(req,res)=>{
    try{
        const users = await User.find()
        return res.status(200).send(users)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router