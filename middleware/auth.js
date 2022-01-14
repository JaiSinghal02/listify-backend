const jwt = require('jsonwebtoken')

function auth(req,res,next){
    const jwtToken = req.header('x-auth-token')
    if(!jwtToken) return res.status(401).send('Un-authenticated user')
    try{
        const user = jwt.verify(jwtToken,'secretPrivateKey_Listify')
        req.user = user
        next()
    }
    catch(err){
        res.status(401).send('Invalid token')
    }
}

module.exports  = auth