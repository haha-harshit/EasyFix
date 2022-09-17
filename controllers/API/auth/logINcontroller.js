module.exports.login = function(req, res){
    console.log('log-in page');
    // return res.send("<h1>Log-In page</h1>")
    return res.render('./auth pages/login_page', {
        title: "EasyFix | Log-In"
    })
}

module.exports.create_session = function(req, res){
    console.log("creating session - login");
    return res.json({
        success: "login success"
    })
}