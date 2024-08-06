/*
 * Copyright (c) 15/08/2022 08:11
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/candidate.controller');

const router = express.Router();

router.get('/', controller.getCandidates);
router.post('/', controller.createCandidate);
router.post('/move', controller.moveCandidate);
router.delete('/', controller.deleteAllCandidate);
router.get('/by', controller.getCandidateBy);
router.get('/pass/by', controller.getPassCandidateBy);
router.put('/:id', controller.updateCandidate);
router.delete('/:id', controller.deleteCandidate);

module.exports = router;
