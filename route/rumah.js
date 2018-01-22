const express = require("express");
const Rumah = require("../model/rumah");
const router = express.Router();

router.get("/:id", (req, res) => {

    Rumah.findById(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });

});

router.get("/", (req, res) => {

    Rumah.find({}, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json(result)
        }
    });
});

router.post("/", (req, res) => {

    let newObj = new Rumah({
        address: req.body.address,
        price: req.body.price,
        availability: req.body.availability
    });

    newObj.save((error) => {
        if (error) {
            res.status(500).send(error);
        }
        else {
            res.status(201).json(newObj)
        };
    })


});

router.delete("/:id", (req, res) => {

    Rumah.findByIdAndRemove(req.params.id, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.json({ message: "Data deleted" })
        }
    });

});

router.put("/", (req, res) => {

    let newObj = {
        address: req.body.address,
        price: req.body.price,
        availability: req.body.availability
    };

    Rumah.findByIdAndUpdate(req.body._id, newObj, (error, result) => {
        if (error) {
            res.status(500).json(error);
        }
        else {
            res.status(500).json({ message: "Data updated" })
        }
    });
});


module.exports = (function () {
    return router;
})();