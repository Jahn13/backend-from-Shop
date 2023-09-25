const jwt = require("jsonwebtoken");

const authMiddleware = (roles) => {
    return (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(token == null || token == '') return res.sendStatus(401)
        jwt.verify(token, "3f845dab", (err, user) => {
            if(err) return res.sendStatus(403)
            
            if(user.roles.includes('admin') && roles.includes('admin')){
                req.user = user
                next()
                
            }else if(user.roles.includes('moderador') && roles.includes('moderador')){
                req.user = user
                next()
            }
            else{
                return res.sendStatus(403)
            }
    
            next()
        })
    }
}

module.exports =  {authMiddleware};