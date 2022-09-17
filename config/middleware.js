// const {check, validationResult} = require('express-validator')
const env = require('../config/environment');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt')

// protected routes
module.exports.isSignedIn = expressJWT({
    secret: env.SECRET,
    userProperty: "auth"
})

// custom middleware
module.exports.isAuthenticated = (req, res, next) => {
    let checker = req.profile && req.auth && req.profile._id === req.auth._id;
    if(!checker){
        return res.status(403).json({
            error: "ACCESS DENIED"
        })
    }
    next();
}

module.exports.isAdmin = (req, res, next) => {
    if(req.profile.role===0){
        // console.log("admin hu")
        return res.status(403).json({
            error: "You are not an ADMIN"
        })
    }
    next();
}