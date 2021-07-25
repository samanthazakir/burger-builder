const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
   
     //Authorization: Bearer <token>
    let token = req.header('Authorization');
   // console.log(token);
    if(!token) res.status(401).send('Access denied. No token provided!');
    //console.log(req.header);
    token = token.split(" ")[1].trim();
    //verify token
    try{
        const decoded =  jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;   
        next();
    }catch(err){
        return res.status(400).send('Invalid token');
    }
}