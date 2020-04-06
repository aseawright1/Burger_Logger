const express = require('express')
const router = express.Router()
const burger = require('../models/burger')

// CRUD routes
// create (post)
router.post('/api/burgers', (req, res) => {
    burger.insertOne(
        ['burger_name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
        (res) => {
            res.json({ id: SpeechRecognitionResult.insertId })
        }
    )
})

// read (get)
router.get('/', (req,res) => {
    burger.selectAll((data) => {
        var hbsObject = { burgers: data }
        console.log(hbsObject)
        res.render('index', hbsObject)
    })
})

// update (put)
router.put('/api/burgers/:id', (req, res) => {
    var condition = `id = ${req.params.id}`
    console.log('condition', condition)

    burger.updateOne({ devoured: req.body.devoured }, condition, (res) => {
        if (res.changedRows === 0) {
            return res.status(404).end()
        } else { res.status(200).end }
    })
})

// delete (necessary?)

module.exports = router