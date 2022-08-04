/*
 * Copyright (c) 04/08/2022 06:53
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/option.controller');

const router = express.Router();

router.get('/', controller.getOptions);
router.post('/', controller.createOption);
router.delete('/', controller.deleteAllOption);
router.get('/by', controller.getOptionBy);
router.put('/:id', controller.updateOption);
router.delete('/:id', controller.deleteOption);

module.exports = router;

