//LOGIN USER w/ jwt
import express from 'express';
const router = express.Router();
import validator from 'express-validator';
const { check } = validator;
import auth from '../middleware/auth.js';

import { authUser, loginUser } from '../controllers/auth.js';

//Get token of current user
router.get('/', auth, authUser);

//Login (Authenticate and get token)
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required.').exists(),
  ],
  loginUser
);

export default router;
