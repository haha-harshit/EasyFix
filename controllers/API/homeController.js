const User = require('../../models/user');

module.exports.home = async function (req, res) {
    try {
        console.log("Home page")
        
        let users = await User.find({})

        // console.log(users);
        // return res.end('<h1>welcome</h1>')
        return res.render("_homepage", {
            title: "EasyFix | Homepage",
            all_users: users
        })
    } catch (error) {
        console.log('Error', err);
        return res.redirect('back');
    }


};