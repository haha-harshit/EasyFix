const User = require("../../../models/user");
const {check, validationResult} = require('express-validator')

// #1
// action for GET sign-up page
module.exports.signup_page = function(req, res){
    if(!req.isAuthenticated()){
        console.log('sign-up page');
        // return res.send("<h1>Sign-Up page</h1>")
        return res.render("./auth pages/_signup_page", {
            title: "EasyFix | Sign-Up"
        })
    }
    return res.redirect('/api/home');
    
}

// #2
// action for creating User
module.exports.create_account = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors.array()[0].msg)
        return res.redirect('/api/sign-up')
        // return res.status(422).json({
        //     error: errors.array()[0].msg 
        // })
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        
        // for any technical error!
        if (err) {
            console.log(err);
            return res.redirect('/api/sign-up')
            // return res.status(400).json({
            //     err: "technical error in finding e-mail!"
            // });
        }

        // for user's email successfully found in database---->> ALREADY TAKEN!
        if (user) {
            
            console.log("E-mail already registered!");
            // return res.json({
            //     message: "E-mail already registered!"
            // })
            return res.redirect('/api/sign-up')
        }

        if (!user) {
            // search for user's USERNAME if ALREADY TAKEN or not!
            User.findOne(
                { username: req.body.username },
                function (err, username) {
                    // technical error
                    if (err) {
                        console.log(err);
                        // return res.status(400).json({
                        //     err: "technical error in finding username!"
                        // });
                        return res.redirect('/api/sign-up')
                    }

                    // for USERNAME successfully found in Database---->> ALREADY TAKEN!
                    if (username) {
                        console.log("USERNAME already taken!");
                        // return res.json({
                        //     message: "Username already taken!"
                        // })
                        return res.redirect('/api/sign-up')
                    }

                    if (!username) {
                        User.create(req.body, function (err, user) {
                            if (err) {
                                console.log("Error in creating the Account!");
                                console.log(err);
                                // return res.status(400).json({
                                //     err: "Error in creating the Account!"
                                // });
                                return res.redirect('/api/sign-up')
                            }
                            console.log("Account created successfully!", user);
                            // return res.json({
                            //     message: "Account created successfully!",
                            //     userName: user.username,
                            //     userEmail: user.email,
                            //     userPassword: user.password,
                            //     userId: user._id
                            // })
                            return res.redirect("/api/homepage")
                        });
                    }
                }
            );
        } else {
            // return res.status(400).json({
            //     "error": "Error in creating account!"
            // })
            return res.redirect('/api/sign-up')
        }
    });

}

