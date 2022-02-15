const { Mongoose } = require('mongoose');
const bootcamp = require('../models/Bootcamp');

// @desc return all bootcamps
// @method GET
// @route /api/v1/bootcamp

exports.getBootcamp = (req, res, next) => {
    res.send("Get All");
}

// @desc return single bootcamps
// @method GET
// @route /api/v1/bootcamp/:id
exports.getSingleBootcamp = (req, res, next) => {
    res.send("Get Single");
}

// @desc create bootcamp
// @method POST
// @route /api/v1/bootcamp/create
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcampData = await bootcamp.create(req.body);
        res.status(201).json({
            "status": "Success",
            "data": bootcampData
        });   
    } catch (error) {
        res.status(500).json({"status": "Internal Server Error", "Error": error});
    }
}

// @desc update bootcamp
// @method PATCH
// @route /api/v1/bootcamp/update
exports.updateBootcamp = (req, res, next) => {
    res.send("Update");
}

// @desc delete single bootcamp
// @method DELETE
// @route /api/v1/bootcamp/:id
exports.deleteBootcamp = (req, res, next) => {
    res.send("Delete");
}