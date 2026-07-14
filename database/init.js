const mongoose = require("mongoose");
const initData = require("./data");
const Employee = require("../models/employee");

// mongodb connection
main()
    .then(async() => {
        console.log(`Database Connected`);
        await initDB();
    })
    .catch((err) => {
        throw new Error(`Error Appeared ${err}`);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/office");
}


// database initialization
const initDB = async() => {
    try {
        await Employee.deleteMany({});
        await Employee.insertMany(initData.data);
    } catch(err) {
        console.error(`Initialization Failed: ${err.message}`);
    } finally {
        await mongoose.connection.close();
        console.log(`Database Initialized with Sample Data`);
    }
}

