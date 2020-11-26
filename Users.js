let util = require('../util.json');

function checkRequiredFields(data, requiredParams) {
    return new Promise(function (resolve, reject) {
        if (data === "") {
            reject({
                "validParams": false,
                "message": "Data Not Found"
            });
        }
        let validParams = true;
        let rowNo = 0;
        let fieldName = "";

        for (let j = 0; j < data.length; j++) {
            for (let i = 0; i < requiredParams.length; i++) {
                if (data[j][requiredParams[i]] === undefined || data[j][requiredParams[i]] === "" || data[j][requiredParams[i]] === null) {
                    validParams = false;
                    rowNo = j + 1;
                    fieldName = requiredParams[i];
                    break;
                }
                if (!validParams) {
                    break;
                }
            }
        }

        let response = {
            "validParams": validParams,
            "message": "Required fields cannot be blank. " + fieldName + " is blank at row no " + rowNo
        }
        resolve(response);
    })
}

exports.DataParser = async function (req, res) {
    console.log(req.body);
    let query = `SELECT * FROM data`;
    mysqldbconnection.query(query, function (error, rows) {
        if (error) {
            let errorMessage = {
                "code": 500,
                "message": message
            }
            res.send(errorMessage);
        } else {
            res.send(rows);
        }
    })
}

//to add a user
exports.adding = async function (req, res) {
    //   console.log("Got response: " + req.statusCode);
    console.log(req.body);
    //let requiredParams = await checkRequiredFields(["id", "Name", "HasAccount", "Contactno"]);
    // if (requiredParams.validParams === true) {
    var sqlValues = [];
    var values = [];
    values.push(req.body.id);
    values.push(req.body.name);
    values.push(req.body.HasAccount);
    values.push(req.body.ContactNo);
    sqlValues.push(values);
    var sqlQuery = "INSERT INTO data (id,Name,HasAccount,Contactno) VALUES ?";
    mysqldbconnection.query(sqlQuery, [sqlValues], function (error, rows) {
        if (error) {
            let errorMessage = {
                "code": 500,
                "message": error
            }
            res.send(errorMessage);
        } else {
            var message = "User Added Successfully";
            let successMessage = {
                "code": 200,
                "message": message
            }
            res.send(successMessage);
        }
    });
    res.send(successMessage);
}

//Find data by ID
exports.letsGetDataById = async function (req, res) {
    // console.log(req.body);
    // res.send("id=1;");
    const id = req.query.id
    if (id != null) {

        var sqlQuery = 'SELECT * FROM data WHERE id = ?;'
        mysqldbconnection.query(sqlQuery, id,
            function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    if (rows.length > 0) {
                        res.send({
                            code: 200,
                            message: "Record Found",
                            result: rows[0]
                        });
                    } else {
                        res.send({
                            code: 404,
                            message: "Record Not Found"
                        });
                    }
                }
            });

        console.log();
    } else {
        var message = "No Records Found";
        let successMessage = {
            "code": 500,
            "message": 'You have an error'
        }
        res.send(successMessage);
    }
}

exports.update = async function (req, res) {
    let arra = [];
    const Name = req.body.Name;
    const id = req.body.id;
    const HasAccount = req.body.HasAccount;
    const ContactNo = req.body.ContactNo;
    arra = [Name, ContactNo, id];
    if (HasAccount != null) {
        var sqlQuery = 'UPDATE data SET Name = ?, ContactNo = ?  WHERE id = ?;'
        await mysqldbconnection.query(sqlQuery, arra,
            function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.send({
                        code: 500,
                        message: "Internal Error"
                    });
                } else {
                    res.send({
                        code: 200,
                        message: "Updated Successfully"
                    });
                }
            });
    } else {
        var message = "No Records Found";
        let successMessage = {
            "code": 500,
            "message": 'You have an error'
        }
        res.send(successMessage);
    }
}