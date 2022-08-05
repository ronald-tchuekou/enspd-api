/*
 * Copyright (c) 05/08/2022 06:39
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/departement.controller');

const router = express.Router();

router.get('/', controller.getDepartements);
router.post('/', controller.createDepartement);
router.delete('/', controller.deleteAllDepartement);
router.get('/by', controller.getDepartementBy);
router.put('/:id', controller.updateDepartement);
router.delete('/:id', controller.deleteDepartement);

module.exports = router;

