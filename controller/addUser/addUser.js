const express = require('express')
const router = express.Router()
const validate = require('./validate')
const User = require('../../models/user')

router.post('/',async(req,res)=>{
    const userName = req.body.userName
    const email = req.body.email
    const mobileNumber = parseInt(req.body.mobileNumber)
    const address = req.body.address
    const array = validate(userName,email,mobileNumber)
    if(array[0]+array[1]+array[2]!==3){
        const response  = {
            userName: array[0],
            email: array[1],
            mobileNumber: array[2]
        }
        return res.status(400).send(response)
    }
    try{
        const user = new User({
            userName: userName,
            email: email,
            mobileNumber: mobileNumber,
            address: address
        })
        await user.save()
        return res.status(200).send(user)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router