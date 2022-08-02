/*
 * Copyright (c) 01/08/2022 06:13
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/candidate.controller');

const router = express.Router();

router.get('/', controller.getCandidates);
router.post('/', controller.createCandidate);
router.delete('/', controller.deleteAllCandidate);
router.get('/by', controller.getCandidateBy);
router.put('/:id', controller.updateCandidate);
router.delete('/:id', controller.deleteCandidate);

module.exports = router;

