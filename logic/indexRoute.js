const Employee = require("../models/employee");
const indexLogic = async(req, res, next) => {
    const employees = await Employee.find({});
    if(!employees) {
        return next(err);
    }
    res.send(employees);
}

module.exports = {func: indexLogic};