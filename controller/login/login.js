const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/',async (req,res) =>{
    const email = req.body.email
    const password = req.body.password
    if(email==="admin@namasys.co" && password==="admin123"){
        const jwtToken = jwt.sign({exp: Math.floor(Date.now() / 1000) + (60*5),email:email},"secretPrivateKey_Listify")
        return res.status(200).send({
            token: jwtToken
        })
    }
    else{
        return res.status(401).send('Invalid Credentials')
    }
})

module.exports = router