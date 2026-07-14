const Employee = require("../models/employee");
const ExpressError = require("../ExpressError");
const newLogic = async (req, res, next) => {
    res.render("new.ejs");
};

module.exports = { func: newLogic };
