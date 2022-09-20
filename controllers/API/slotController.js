const { use } = require("passport");
const User = require("../../models/user");

module.exports.markAsOffHours = async function (req, res) {
    try {
        if (req.isAuthenticated()) {
            let user = await User.findById(req.user._id);
            if(user){
                user.offHours.push(req.body.datetimes)
                user.save();
            }
            return res.redirect('back')
        }    
    } catch (error) {
        console.log('error in marking off-hrs')
        return res.redirect('back');
    }
};

module.exports.appointment_plannar = async function(req, res){
    try {
        if (req.isAuthenticated()) {
            let guest = await User.findById(req.params.id);
            return res.render('_appointment_plannar', {
                title: 'EasyFix | Appointment Plannar',
                guest: guest
            })
        }    
    } catch (error) {
        console.log('error in appoint-plannar', error);
        return res.redirect('back')
    }
}

module.exports.book_appointment = async function(req, res){
    try {
        if (req.isAuthenticated()) {
            let guest = await User.findById(req.params.id);
            let client = await User.findById(req.user._id);

            if(guest && client){
                // guest.upcoming_appointments.push(req.body.datetimes)
            }


            return res.render('_appointment_plannar', {
                title: 'EasyFix | Appointment Plannar',
                guest: guest
            })
        }    
    } catch (error) {
        console.log('error in appoint-plannar', error);
        return res.redirect('back')
    }
}