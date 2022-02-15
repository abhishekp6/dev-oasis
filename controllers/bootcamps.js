const { Mongoose } = require('mongoose');
const bootcamp = require('../models/Bootcamp');

// @desc return all bootcamps
// @method GET
// @route /api/v1/bootcamp

exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcampData = await bootcamp.find();
        if(!bootcampData){
            return res.status(400).json({"Status":"Fail", "data":"Data Does not exists"});
        }
        res.status(200).json({"Status":"Success", "data": bootcampData});
    } catch (error) {
        res.status(500).json({"Status":"Fail", "Error":error});
    }
}

// @desc return single bootcamps
// @method GET
// @route /api/v1/bootcamp/:id
exports.getSingleBootcamp = async (req, res, next) => {
    try {
        const bootcampData = await bootcamp.findById(req.params.id);
        if(!bootcampData){
            return res.status(400).json({"Status":"Fail", "data":"Data Does not exists"});
        }
        res.status(200).json({"Status":"Success", "data": bootcampData});
    } catch (error) {
        res.status(500).json({"Status":"Fail", "Error":error});
    }
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