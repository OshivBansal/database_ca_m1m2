const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const menuItemSchema = new Schema({
  dishName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});


const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
