/*
 * Copyright (c) 04/08/2022 07:48
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/diplome.controller');

const router = express.Router();

router.get('/', controller.getDiplomes);
router.post('/', controller.createDiplome);
router.delete('/', controller.deleteAllDiplome);
router.get('/by', controller.getDiplomeBy);
router.put('/:id', controller.updateDiplome);
router.delete('/:id', controller.deleteDiplome);

module.exports = router;

