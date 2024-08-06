/*
 * Copyright (c) 14/08/2022 12:39
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/collection.controller');

const router = express.Router();

router.get('/', controller.getCollections);
router.get('/by', controller.getCollectionBy);
router.get('/update-counts/:id', controller.updateCounts);
router.put('/:id', controller.updateCollection);
router.post('/', controller.createCollection);
router.delete('/:id', controller.deleteCollection);

module.exports = router;
