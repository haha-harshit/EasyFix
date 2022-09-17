const {check, validationResult} = require('express-validator')
// action for GET sign-up page
module.exports.signup_page = function(req, res){
    console.log('sign-up page');
    // return res.send("<h1>Sign-Up page</h1>")
    return res.render("./auth pages/signup_page", {
        title: "EasyFix | Sign-Up"
    })
}

// action for creating User
module.exports.create_account = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log("errorsss")
        return res.status(422).json({
            error: errors.array()[0].msg 
        })
    }
    console.log("creating account - signup");
    return res.json({
        success: "account created"
    })
}

