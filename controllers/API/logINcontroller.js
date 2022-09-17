module.exports.login = function(req, res){
    console.log('log-in page');
    // return res.send("<h1>Log-In page</h1>")
    return res.render("login_page", {
        title: "EasyFix | Log-In"
    })
}