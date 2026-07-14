// requiring packages and files
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// app creation
const PORT = 8080;
const app = express();

// mongodb connection
main()
    .then(async () => {
        console.log(`Database Connected`);
    })
    .catch((err) => {
        console.error(`Error Appeared: ${err}`);
        process.exit(1);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/office");
}

// middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// importing logics
const indexLogic = require("./logic/indexRoute");

// wrapAsync
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => {
            next(err);
        });
    };
}

// root route
app.get("/", async(req, res, next) => {
    res.redirect("/employees");
})

// index route
app.get("/employees", wrapAsync(indexLogic.func));

// page not found error
app.use((req, res, next) => {
    const err = new Error("Page Not Found");
    err.status = 404;
    next(err);
})

// error handling middleware
app.use((err, req, res, next) => {
    let {status = 500, message = "Some Error"} = err;
    res.status(status).send(message);
})

// server listen
app.listen(PORT, () => {
    console.log(`Server Listening: ${PORT}`);
});
