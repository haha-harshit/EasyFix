module.exports.home = function (req, res) {
    console.log("Home page")
    // return res.end('<h1>welcome</h1>')
    return res.render("_homepage", {
        title: "EasyFix | Homepage"
    })
};