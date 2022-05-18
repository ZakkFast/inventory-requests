const router = require('express').Router();
const userRoutes = require('./users.js');
const productRoutes = require('./products.js');
const requestRoutes = require('./requests.js');


router.get('/', (req, res) => {
    console.log('why')
  })

router.use('/request', requestRoutes);
router.use('/product', productRoutes);
router.use('/user', userRoutes);

module.exports = router;