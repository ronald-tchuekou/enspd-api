/*
 * Copyright (c) 04/08/2022 07:28
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/region.controller');

const router = express.Router();

router.get('/', controller.getRegions);
router.post('/', controller.createRegion);
router.delete('/', controller.deleteAllRegion);
router.get('/by', controller.getRegionBy);
router.put('/:id', controller.updateRegion);
router.delete('/:id', controller.deleteRegion);

module.exports = router;

