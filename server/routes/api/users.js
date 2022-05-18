const router = require('express').Router();
const { User } = require('../../models/User');

router.get('/',  (req, res) => {
     console.log('User get route')
})

module.exports = router