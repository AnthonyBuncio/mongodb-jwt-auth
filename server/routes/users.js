//REGISTER USER
import express from 'express';
const router = express.Router();
import validator from 'express-validator';
const { check } = validator;

import { registerUser } from '../controllers/users.js';

//Register new user
router.post(
  '/register',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  registerUser
);

export default router;
