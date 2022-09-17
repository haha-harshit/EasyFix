const express = require("express");

const port = 8000;

// import the layout-lib
const expressLayouts = require("express-ejs-layouts");

const app = express();

const path = require("path");

app.use(express.urlencoded({ extended: true }));

// use a particular layout ---> use it before routes to tell that these routes belong to a particular layout
app.use(expressLayouts);


// use express router
app.use("/", require("./routes/API/index"));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
