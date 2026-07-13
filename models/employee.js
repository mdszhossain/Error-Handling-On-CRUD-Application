const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    empName: {
        type: String,
        required: true,
    },
    empDesignation: {
        type: String,
        required: true,
    },
    empSalary: {
        type: Number,
        required: true,
    },
    empContact: {
        type: String,
        required: true,
    },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;