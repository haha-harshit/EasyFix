const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// authenticating USER using passport
passport.use('local' ,new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    }, 
    function(req, email, password, done){
        // find a user and establish the identity
        User.findOne({email: email}, function(err, user){
            if(err){
                // req.flash('error', err);
                return done(err);
            }
            else if(!user || !user.authenticate(req.body.password)){
                // req.flash('error', 'Invalid Username/Password');
                // console.log(user.password)
                // console.log(req.body.password)
                // console.log(password);
                console.log('Invalid Username/Password');
                return done(null, false);
            }
            else{
                console.log("Valid User")
                return done(null, user);
            }
        }) 
    }
));


//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    // console.log('serialize done');
    done(null, user.id);
});


//De-serializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding User! ---> passport')
            return done(err);
        }
        // console.log('de-serialize done');
        return done(null, user);
    })
});


// check if user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if user is signed in then pass on the next action
    if(req.isAuthenticated()){
        return next();
    }

    // if user is not signed in
    // req.flash('information', 'You are not Logged In!');
    return res.redirect('back');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated){
        // req.user contains the current signed in user from the session cookie and sending this to the locals for views
        res.locals.user = req.user;
    }
    next();
}



module.exports = passport;