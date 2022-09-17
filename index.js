const env = require('./config/environment');
const express = require("express");
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

// using middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());


const path = require("path");


// use a particular layout ---> use it before routes to tell that these routes belong to a particular layout
app.use(expressLayouts);

app.set("layout", "./layout/main_layout");

// extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");


// use express router
app.use("/", require("./routes/API/index"));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(env.port)
    console.log(`Server is running on port: ${port}`);
});
