module.exports.home = function (req, res) {
    // if (req.isAuthenticated()) {
    //     return res.redirect("/homepage");
    // }

    // return res.render("main_test", {
    //     title: "LearnDome",
    // });
    console.log("Home page")
    // return res.end('<h1>welcome</h1>')
    return res.render("_homepage", {
        title: "EasyFix | Homepage"
    })

};