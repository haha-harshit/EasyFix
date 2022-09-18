const express = require("express");
const env = require('./config/environment');
const port = env.port || 8000;

// import the layout-lib
const expressLayouts = require("express-ejs-layouts");

const app = express();

// importing DB
const db = require("./config/mongoose");

// importing middlewares
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');

// for storing session data on server restarting
const MongoDBStore = require("connect-mongodb-session")(session);


const path = require("path");

// using middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());




// use a particular layout ---> use it before routes to tell that these routes belong to a particular layout
app.use(expressLayouts);

app.set("layout", "./layout/main_layout");

// extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

const store = new MongoDBStore(
    {
        uri: `mongodb://localhost/${env.db}`,
        databaseName: env.db,
        // autoRemove: "disabled",
        collection: 'mySessions'
    },
)

// catch errors
store.on('error', function(error){
    console.log('error')
})


// mongo-store is used to store the session cookie in db!
// making sessions
app.use(
    session({
        name: "EasyFix",

        // change the secret before deployment
        secret: env.session_cookie_key,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: null,
        },
        store: store,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);



// use express router
app.use("/", require("./routes/API/index"));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(env.port)
    console.log(`Server is running on port: ${port}`);
});
