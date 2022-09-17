const mongoose = require('mongoose');
const env = require('./environment');

mongoose.connect(`mongodb://localhost/${env.db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB!"));

db.once('open', function(){
    console.log('Connected to MongoDB');
});

module.exports = db; 