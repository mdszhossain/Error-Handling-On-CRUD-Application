const Employee = require("../models/employee");
const ExpressError = require("../ExpressError");
const editLogic = async (req, res, next) => {
    const { id } = req.params;
    let employeeInfo = await Employee.findById(id);
    if (!employeeInfo) {
        throw new ExpressError(404, "Employee Info Not Found");
    }
    res.render("edit.ejs", { employeeInfo });
    // res.send(employeeInfo);
};

module.exports = { func: editLogic };
