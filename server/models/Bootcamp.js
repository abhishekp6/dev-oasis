const mongoose = require('mongoose');


const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name Required'],
        unique: [true, 'Name Should be unique'],
        trim: true,
        maxlength: [50, 'NAme cannot be be more than 50 Chars']
    },
    slug: String,
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Regex did not match'
        ]
    },
    email: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please Enter a valid email']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    location: {
        type: {
          type: String,
          enum: ['Point'], 
          required: false
        },
        coordinates: {
          type: [Number],
          required: false
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        pincode: String,
        country: String
      },
      careers :{
          type: [String],
          required: true,
          enum: [
              'Web Development',
              'Mobile Development',
              'UI/UX',
              'Data Science',
              'Business',
              'Others'
          ]
      },
      rating: {
          type: Number,
          min: [1, 'Min length should be 1'],
          max: [10, 'Max length is 10']
      },
      averageCost: Number,
      photo: {
          type: String,
          default: 'no-photo.jpg'
      },
      housing: {
          type: Boolean,
          default: false
      },
      jobAssistance: {
          type: Boolean,
          default: false
      },
      jobGuarentee: {
          type: Boolean,
          default: false
      },
      createdAt: {
          type: Date,
          default: Date.now()
      }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);