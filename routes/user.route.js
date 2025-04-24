const express = require('express');
const router = express.Router();
const { body } = require('express-validator')


route.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 character long'),
    
])


module.exports = router;