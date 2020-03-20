var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bitcoinSchema = new Schema({
  current_price: Number,
  market_cap: Number,
  ath_date: String,

});


module.exports = mongoose.model('Bitcoin',bitcoinSchema)