const connection = require('./connection')

// push a question mark that we will use to store values in mySQL query
function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

// convert objects and key values to readable SQL
function objToSql(ob) {
    const arr = [];
    // change array of strings into one comma-separated string
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            // add quotes to string
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// methods to retrieve and store data in database
var orm = {
    // select all data in table
    selectAll(table, cb) {
        let queryString = `SELECT * FROM ${table};`
        connection.query(queryString, (err,res) => {
            if (err) throw err;
            cb(res)
        })
    },
    // insert specific entries into table
    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;
        queryString += ' ('
        queryString += cols.toString()
        queryString += ') '
        queryString += 'VALUES ('
        queryString += printQuestionMarks(vals.length);
        queryString += ')'

        console.log(queryString)

        connection.query(queryString, vals, (err, res) => {
            if (err) throw err
            cb(res)
        })
    },
    // update specific entries in table
    updateOne(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`
        queryString += ' SET '
        queryString += objToSql(objColVals)
        queryString += ' WHERE '
        queryString += condition

        console.log(queryString)

        connection.query(queryString, (err, res) => {
            if (err) throw err
            cb(res)
        })
    },
    // delete entries in table
    deleteOne(table, condition, cb) {
        let queryString = `DELETE FROM ${table}`
        queryString += ' WHERE '
        queryString += condition

        console.log(queryString)

        connection.query(queryString, (err, res) => {
            if (err) throw err
            cb(res)
        })
    }
}

module.exports = orm