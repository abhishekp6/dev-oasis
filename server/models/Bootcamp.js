const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        require: [true, 'Name Required'],
        unique: [true, 'Name Should be unique'],
        trim: true,
        maxlength: [250, 'Name cannot be be more than 50 Chars']
    },
    courseDesc: {
        type: String,
        require: [true, 'Description Required'],
        unique: [true, 'Description Should be unique'],
        trim: true,
        maxlength: [500, 'Name cannot be be more than 50 Chars']
    },
    instructor: {
        type: String,
        default: null
    },
    rating: {
        type: String,
    },
    contentLength: {
        type: String,
        default: null
    },
    lectureCount:{
        type: String,
        default: null
    },
    level:{
        type: String,
        default: null
    },
    thumbnail:{
        type: String,
        default: null
    },
    price: {
        type: String,
        default: null
    },
    studentsEnrolled:{
        type: String,
        default: null
    },
    lastUpdate: {
        type: String
    },
    language: {
        type: String,
        default: null
    },
    courseIncludes: {
        type: Array,
        default: []
    },
    learning: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);