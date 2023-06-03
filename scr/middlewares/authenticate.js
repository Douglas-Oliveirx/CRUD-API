const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json")

module.exports = (req, res, next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            error:true,
            message:'Token não fornecido.'
        })
    }

    const token = authHeader.split(' ')[1];
    console.log(token)

    return jwt.verify(token, authConfig.secret, (err, decoded)=>{

        if(err){
            return res.status(401).json({
                error:true,
                message: 'Token inválido.'
            })
        }

        console.log(err)
        console.log(decoded)

        return next();
    })

}