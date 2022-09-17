module.exports.signup = function(req, res){
    console.log('sign-up page');
    // return res.send("<h1>Sign-Up page</h1>")
    return res.render("./auth pages/signup_page", {
        title: "EasyFix | Sign-Up"
    })
}