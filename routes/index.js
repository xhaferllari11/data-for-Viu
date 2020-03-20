var express = require('express');
const request = require('request');
const Bitcoin = require('../database/database')
var router = express.Router();
var url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false'

/* GET home page. */
router.get('/coin-info', function(req, res, next) {
  
  console.log('entered')
  // 1. get info from API
  request(url, (e,r,body) => {
    if (e) res.status(400).json(e);
    console.log(body);
    body = JSON.parse(body)

    // 2. Save info in database
    Bitcoin.create(body[0])
    .then(function(bitcoinData){

      // 3. send info back to use/client/app
      res.status(200).json(body);
    })
    .catch(function(e){
      res.status(400).json(e);
    });
  });
});

module.exports = router;
