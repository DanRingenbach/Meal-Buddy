const router = require('express').Router();
const userRoute = require('./userRoute');
const postRoute = require('./mealRoute');

router.use('/users', userRoute);
router.use('/meals', postRoute);

module.exports = router;