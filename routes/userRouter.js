const { checkUser, superAuth, authenticate } = require('../middleware/authorization');
const { userSignUp, userLogin,  signOut, verifyEmail, resendVerificationEmail, forgotPassword, changePassword, resetPassword, updateUser, deleteUser } = require('../controllers/userController');

const router = require('express').Router();

router.route('/api').get((req, res) => {
    res.json('WELCOME TO CHOW FINDER')
})

router.route('/sign-up').post(userSignUp)

router.route('/log-in').post(userLogin)

router.route('/log-out/:userId').post(authenticate, signOut)

router.route( "/users/verify-email/:token" )
    .get( verifyEmail );

router.route( "/users/resend-verification-email" )
    .post( resendVerificationEmail );
    
router.route('/users/change-password/:token')
.post(changePassword);

router.route('/users/reset-password/:token')
.post(resetPassword);

router.route('/users/forgot-password')
.post(forgotPassword);

router.route('/users/update/:userId')
.patch(authenticate, updateUser)

router.route('/users/delete-self/:userId')
.delete(authenticate, deleteUser)

router.route('/add-to-cart')
.post(authenticate)




module.exports = router