const User = require('../../models/user');

module.exports.profile = async function (req, res) {
    try {
        console.log("Profile page")
        return res.render("_My_profile", {
            title: "EasyFix | Profile"
        })
    } catch (error) {
        console.log('Error', err);
        return res.redirect('back');
    }
};

module.exports.update_profile = function(req, res){
    return res.render('_update_profile',{
        title: 'Codeial | Update Profile'
    });
};