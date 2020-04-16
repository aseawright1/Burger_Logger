const orm = require('../config/orm')

const burger = {
    // select all burgers
    selectAll(cb) {
        orm.selectAll('burgers', (res) => {
            cb(res)
        })
    },
    // create new burger
    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => {
            cb(res)
        })
    },
    // update burger
    updateOne(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => {
            cb(res)
        })
    },
    // delete burger
    deleteOne(condition, cb) {
        orm.deleteOne('burgers', condition, (res) => {
            cb(res)
        })
    }
};

module.exports = burger