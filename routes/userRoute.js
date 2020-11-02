'use strict';
//user route
const express = require('express');
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.user_list_get);
router.get('/:id', userController.user_get_by_id);
router.post(
  '/',
  [body('email', 'is not valid email').isEmail()],
  userController.user_create
);

module.exports = router;
