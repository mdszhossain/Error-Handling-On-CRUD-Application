const Employee = require("../models/employee");
const ExpressError = require("../ExpressError");
const updateLogic = async (req, res, next) => {
    const {id} = req.params;
    const updatedEmployeeInfo = req.body.employee;
    if(!updatedEmployeeInfo) {
        throw new ExpressError(404, "Updated Employee Info Not Found");
    }
    await Employee.findByIdAndUpdate(id, updatedEmployeeInfo);
    res.redirect(`/employees/${id}`);
};

module.exports = {func: updateLogic};