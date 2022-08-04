/*
 * Copyright (c) 01/08/2022 06:13
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/filiere.controller');

const router = express.Router();

router.get('/', controller.getFilieres);
router.post('/', controller.createFiliere);
router.delete('/', controller.deleteAllFiliere);
router.get('/by', controller.getFiliereBy);
router.put('/:id', controller.updateFiliere);
router.delete('/:id', controller.deleteFiliere);

module.exports = router;

