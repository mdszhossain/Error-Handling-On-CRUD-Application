const Employee = require("../models/employee");
const ExpressError = require("../ExpressError");
const showLogic = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
        throw new ExpressError(404, "Employee Not Found");
    }
    // res.render("show.ejs", {employee});
    res.render("show.ejs", {employee});
};

module.exports = { func: showLogic };
