const User = require("../../models/user");

module.exports.markAsOffHours = async function (req, res) {

    try {
        if (req.isAuthenticated()) {
            console.log(req.body)
            console.log(req.user.username)
            let user = await User.findById(req.user._id);
            // if(user){

            // }
            return res.redirect('back')
        }    
    } catch (error) {
        console.log('error hai khi')
        return res.redirect('back');
    }

    

    // return res.render("main_test", {
    //     title: "LearnDome",
    // });
    console.log("Welcome to index page")
    // return res.end('<h1>welcome</h1>')
    return res.render("_main_page", {
        title: "EasyFix"
    })

};