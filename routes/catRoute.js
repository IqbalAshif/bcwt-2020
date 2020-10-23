'use strict';
// catRoute
const express = require('express');
const catController = require('../controllers/catController');
const router = express.Router();

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get_by_id);


module.exports = router;