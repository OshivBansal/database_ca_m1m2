
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  menuItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem' 
  }]
});


const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Restaurant, MenuItem };
