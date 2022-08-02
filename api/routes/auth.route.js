/*
 * Copyright (c) 02/08/2022 08:59
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const express = require('express');
const controller = require('../controllers/auth.contoller');

const router = express.Router();

router.post('/login', controller.login);
router.get('/pass-forgot/:email', controller.checkUserEmail);
router.put('/reset-password', controller.resetPassword);
router.post('/create', controller.createUser);
router.get('/users', controller.getUsers);
router.get('/users-by', controller.getUserBy);
router.put('/update/:id', controller.updateUser);
router.put('/change-pass/:id', controller.changePassword);
router.delete('/delete/:id', controller.deleteUser);

module.exports = router;

