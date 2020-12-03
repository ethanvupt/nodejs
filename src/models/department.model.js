"use strict";
var dbConn = require("./../../config/db.config");
//Department object create
var Department = function (department) {
    this.name = department.name;
    this.status = department.status ? department.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Department.create = function (newEmp, result) {
    dbConn.query("INSERT INTO departments set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Department.findById = function (id, result) {
    dbConn.query(
        "Select * from departments where id = ? ",
        id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};
Department.findAll = function (result) {
    dbConn.query("Select * from departments", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("departments : ", res);
            result(null, res);
        }
    });
};
Department.update = function (id, department, result) {
    dbConn.query(
        "UPDATE departments SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?",
        [
            department.first_name,
            department.last_name,
            department.email,
            department.phone,
            department.organization,
            department.designation,
            department.salary,
            id,
        ],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        }
    );
};
Department.delete = function (id, result) {
    dbConn.query(
        "DELETE FROM departments WHERE id = ?",
        [id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        }
    );
};
module.exports = Department;
