const Employee = require("../models/employee");
const ExpressError = require("../ExpressError");
const createLogic = async(req, res, next) => {
    const employee = req.body.employee;
    if(!employee) {
        throw new ExpressError(404, "Employee Not Found");
    }
    await Employee.insertOne(employee);
    res.redirect("/employees");
};

module.exports = {func: createLogic};