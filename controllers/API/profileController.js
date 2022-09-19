const User = require('../../models/user');

module.exports.profile = async function (req, res) {
    try {
        console.log("Profile page")
        // let users = await User.find({})
        return res.render("_My_profile", {
            title: "EasyFix | Profile"
        })
    } catch (error) {
        console.log('Error', err);
        return res.redirect('back');
    }


};