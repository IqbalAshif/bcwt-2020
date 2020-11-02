'use strict';
// catRoute
const express = require('express');
const multer = require('multer');
const catController = require('../controllers/catController');
const router = express.Router();
const upload = multer({ dest: 'uploads' });

router.get('/', catController.cat_list_get);
router.get('/:id', catController.cat_get_by_id);
router.post('/', upload.single('cat'), catController.cat_create);
router.put('/', catController.cat_update_put);
router.delete('/:id', catController.cat_delete);

module.exports = router;
