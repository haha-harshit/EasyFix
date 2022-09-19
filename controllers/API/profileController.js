const User = require("../../models/user");
const {check, validationResult} = require('express-validator')
module.exports.profile = async function (req, res) {
    try {
        return res.render("_profile", {
            title: "EasyFix | Profile"
        })
    } catch (error) {
        console.log('Error', err);
        return res.redirect('back');
    }
};

// get update-profile page
module.exports.update_profile = function(req, res){
    return res.render('_update_profile',{
        title: 'Codeial | Update Profile'
    });
};


// post update-profile
module.exports.update_profile_ok = async function(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        // console.log("error h", )
        // return res.status(422).json({
        //     error: errors.array()[0].msg 
        // })
        return res.redirect('back');
    }

    // console.log(req.body)
    if(req.user.id == req.params.id){
        // User.findByIdAndUpdate(req.params.id, )
        try{
            let user = await User.findById(req.params.id);
            // console.log(user.username)
            // User.uploadAvatar(req, res, function(err){
            //     if(err){
            //         console.log('****Multer Error: ', err);
            //     }
                
            //     console.log(req.file);

            //     user.name = req.body.name;
            //     user.email = req.body.email;

            //     if(req.file){
            //         if(user.avatar){
            //             fs.unlinkSync(path.join(__dirname, '..', user.avatar));
            //         }
            //         // this is saving the path of the uploaded file into the avatar field in the user
            //         user.avatar = User.avatarPath + '/' + req.file.filename;
            //     }

            //     user.save();
            //     req.flash('success', 'Profile Updated');
            //     return res.redirect('back');
            // });
            // console.log(req.body.username)
            user.username = req.body.username;
            user.email = req.body.email;

            // console.log(user.username)
            user.save();
            console.log("user updated success")
            // req.flash('success', 'Profile Updated');
            return res.redirect(`/api/profile/update-profile/${req.user.id}`);
        }catch(err){
            console.log('error', err)
            // req.flash('error', err);    
            return res.redirect('back');
        }
    }
    else{
        console.log("unauth")
        // req.flash('error', 'Unauthorized!');
        return res.redirect('back');
        // return res.status(401).send('Unauthorized');
    }
};
