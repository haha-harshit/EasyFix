const { use } = require("passport");
const User = require("../../models/user");
const Appointment = require("../../models/appointments");

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
                let appointment = await Appointment.create({
                    title: req.body.title,
                    agenda: req.body.agenda,
                    time: req.body.datetimes,
                    guest: guest._id,
                    client: req.user._id
                })
                guest.upcoming_appointments.push(appointment);
                client.upcoming_appointments.push(appointment);
                guest.save();
                client.save();
            }
            return res.redirect('back')
        }    
    } catch (error) {
        console.log('error in appoint-plannar', error);
        return res.redirect('back')
    }
}