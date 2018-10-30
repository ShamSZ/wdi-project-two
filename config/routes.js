const authController = require('../controllers/authController');
const restController = require('../controllers/restController');
const reviewController = require('../controllers/reviewController');
const userController = require('../controllers/userController');

const secureRoute = require('../lib/secureRoute');
const auth = require('../lib/auth');
const router = require('express').Router();

router.use('*', auth.checkAuthStatus);
router.get('/', restController.home);
router.get('/about', restController.about);


router.post('/restaurants/:restId/reviews', reviewController.create);
router.delete('/restaurants/:restId/reviews/:reviewId', reviewController.delete);


router.route('/restaurants')
  .get(restController.index)
  .post(secureRoute, restController.create);

router.route('/restaurants/new')
  .get(secureRoute, restController.new);

router.route('/restaurants/:restId')
  .put(secureRoute, restController.update)
  .get(restController.show)
  .delete(secureRoute, restController.delete);

router.route('/restaurants/:restId/edit')
  .get(secureRoute, restController.edit);

router.route('/register')
  .get(authController.registerForm)
  .post(authController.registerUser);

router.route('/login')
  .get(authController.loginForm)
  .post(authController.loginUser);

router.route('/logout')
  .get(authController.logout);

router.route('/users/:userId')
  .get(userController.show);

module.exports = router;
