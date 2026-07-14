const Employee = require("../models/employee");
const ExpressError = require("../ExpressError");
const indexLogic = async(req, res, next) => {
    const employees = await Employee.find({});
    if(employees.length === 0) {
        throw new ExpressError(404, "No Employee Found");
    }
    res.render("index.ejs", {employees});
}

module.exports = {func: indexLogic};