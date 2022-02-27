const express = require('express');
const router = express.Router();
const { getBootcamp, getSingleBootcamp, deleteBootcamp, createBootcamp, updateBootcamp, searchBootcamp } = require('../controllers/bootcamps');

router.route('/')
    .get(getBootcamp);
router.route('/search/:searchTerm')
    .get(searchBootcamp);
router.route('/:id')
    .get(getSingleBootcamp)
    .delete(deleteBootcamp);
router.route('/create')
    .post(createBootcamp);
router.route('/update')
    .patch(updateBootcamp);


module.exports = router;