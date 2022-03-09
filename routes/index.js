var express = require('express');
var router = express.Router();
const pageController = require('../controllers/pageController');
const userController = require('../controllers/userController');
const redirectGuests = require('../middleware/redirectGuests');

router.get('/', redirectGuests, pageController.renderDashboard)
router.get('/accounting', redirectGuests, pageController.renderAccounting);
router.get('/marketing', redirectGuests, pageController.renderMarketing);
router.get('/sales',redirectGuests, pageController.renderSales);
router.get('/hr', redirectGuests, pageController.renderHR);
router.get('/profile', redirectGuests, pageController.viewProfile);

router.get('/register', userController.renderRegistrationForm);
router.post('/register', userController.registerUser);

router.get('/login', userController.renderLoginForm);
router.post('/login', userController.loginUser);



router.get('/logout', userController.logout);
module.exports = router;
