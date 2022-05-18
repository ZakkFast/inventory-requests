const router = require('express').Router();
const { Request } = require('../../models/Request');

router.get('/',  (req, res) => {
     console.log('request get route')
})

module.exports = router