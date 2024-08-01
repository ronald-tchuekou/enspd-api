/*
 * Copyright (c) 04/08/2022 07:48
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/school.controller');

const router = express.Router();

router.get('/', controller.getSchools);
router.post('/', controller.createSchool);
router.delete('/', controller.deleteAllSchool);
router.get('/by', controller.getSchoolBy);
router.put('/:id', controller.updateSchool);
router.delete('/:id', controller.deleteSchool);

module.exports = router;

