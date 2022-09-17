const {check, validationResult} = require('express-validator')

module.exports.login = function(req, res){
    console.log('log-in page');
    // return res.send("<h1>Log-In page</h1>")
    return res.render('./auth pages/login_page', {
        title: "EasyFix | Log-In"
    })
}

module.exports.create_session = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg 
        })
    }
    console.log("creating session - login");
    return res.json({
        success: "login success"
    })
}