/*
 * Copyright (c) 13/08/2022 17:43
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/collection.controller');

const router = express.Router();

router.get('/', controller.getCollections);
router.get('/by', controller.getCollectionBy);
router.put('/:id', controller.updateCollection);
router.post('/', controller.createCollection);
router.delete('/', controller.deleteCollection);

module.exports = router;

