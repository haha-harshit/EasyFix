module.exports.index = function (req, res) {
    // if (req.isAuthenticated()) {
    //     return res.redirect("/homepage");
    // }

    // return res.render("main_test", {
    //     title: "LearnDome",
    // });
    console.log("Welcome to index page")
    // return res.end('<h1>welcome</h1>')
    return res.render("main_page", {
        title: "EasyFix"
    })

};