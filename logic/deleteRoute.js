const Employee = require("../models/employee");
const ExpressError = require("../ExpressError");
const deleteLogic = async(req, res, next) => {
    const {id} = req.params;
    await Employee.findByIdAndDelete(id);
    res.redirect("/employees");
};

module.exports = {func: deleteLogic};