const User = require("../../../models/user");
const {check, validationResult} = require('express-validator')

const env = require('../../../config/environment');

// #1
// GET log-in page
module.exports.destroy_session = function(req, res){
    // function given by passport
    console.log("logging out")
    req.logout(function(err){
        if(err){
            return res.redirect('back')
        }
        return res.redirect("/");
    });
    // req.flash("success", "Logged Out Successfully! 👀");
}
