module.exports.index = function (req, res) {
    // if (req.isAuthenticated()) {
    //     return res.redirect("/homepage");
    // }

    // return res.render("main_test", {
    //     title: "LearnDome",
    // });

    return res.redirect(<h1>Welcome to EasyFix</h1>)
};