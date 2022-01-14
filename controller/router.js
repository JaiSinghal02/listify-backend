const express = require('express')
const router = express.Router()
const auth  = require('../middleware/auth')
const login = require('./login/login')
const getUser = require('./getUser/getUser')
const addUser = require('./addUser/addUser')
const deleteUser = require('./deleteUser/deleteUser')

router.get('/',(req,res)=>{
    res.send('This is backend API for listify website')
})
router.use('/login',login)
router.use('/getUser',auth,getUser)
router.use('/addUser',auth,addUser)
router.use('/deleteUser',auth,deleteUser)
router.get('/autoLogin',auth,(req,res)=>{
    res.status(200).send()
})

module.exports = router