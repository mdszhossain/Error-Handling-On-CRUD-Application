// requiring packages and files
const express = require("express");
const mongoose = require("mongoose");

// app creation
const PORT = 8080;
const app = express();

// mongodb connection
main()
    .then(async() => {
        console.log(`Database Connected`);
    })
    .catch((err) => {
        console.error(`Error Appeared: ${err}`);
        process.exit(1);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/office");
}

// server listen
app.listen(PORT, () => {
    console.log(`Server Listening: ${PORT}`);
});
