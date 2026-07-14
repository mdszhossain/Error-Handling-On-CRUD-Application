// requiring packages and files
const express = require("express");
const mongoose = require("mongoose");

// app creation
const PORT = 8080;
const app = express();



// server listen
app.listen(PORT, () => {
    console.log(`Server Listening: ${PORT}`);
});
