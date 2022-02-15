const express = require('express');
const router = express.Router();
const { getBootcamp, getSingleBootcamp, deleteBootcamp, createBootcamp, updateBootcamp } = require('../controllers/bootcamps');

router.route('/')
    .get(getBootcamp);
router.route('/:id')
    .get(getSingleBootcamp)
    .delete(deleteBootcamp)
    .post(createBootcamp)
    .patch(updateBootcamp);

module.exports = router;