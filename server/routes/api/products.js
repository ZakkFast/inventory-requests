const router = require('express').Router();
const { Product } = require('../../models/Product');

router.get('/',  (req, res) => {
     console.log('Product get route')
})

module.exports = router