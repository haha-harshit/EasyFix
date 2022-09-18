const User = require("../../../models/user");
const {check, validationResult} = require('express-validator')

const env = require('../../../config/environment');

// #1
// GET log-in page
module.exports.login = function(req, res){
    if(!req.isAuthenticated()){
        console.log('log-in page');
        // return res.send("<h1>Log-In page</h1>")
        return res.render('./auth pages/_login_page', {
            title: "EasyFix | Log-In"
        })
    }
    return res.redirect('/api/home');
}

// #2
// Action for loggin-in
module.exports.create_session = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log("error h")
        // return res.status(422).json({
        //     error: errors.array()[0].msg 
        // })
        return res.redirect('back');
    }
    // either use this manual authentication or passport-local-- here we have used passport-local as seen in routes
    // User.findOne({email:req.body.email}, function(err, user){
    //     if(err){
    //         return res.status(400).json({
    //             error: "User E-mail does not exist!"
    //         })
    //     }
    //     if(!user.authenticate(req.body.password)){
    //         // console.log(req.email)
    //         // console.log(req.body.password)
    //         return res.status(401).json({
    //             error: "E-mail and password did not match!"
    //         })
    //     }
    //     if(user.authenticate(req.body.password)){
    //         // create token
    //         const token = jwt.sign({_id: user._id}, env.SECRET)

    //         // put token in cookie
    //         res.cookie("token", token)

    //         // send response to front end
    //         const{ _id, username, email, role} = user;
    //         return res.json({token , user: {_id, username, email, role}});
    //     }
    // })
    return res.redirect('/api/home')
    
}