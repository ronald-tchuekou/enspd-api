/*
 * Copyright (c) 02/08/2022 09:15
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const moment = require('moment');

exports.login = async (req, res) => {
   try {
      const response = await UserModel.getUserWhere({ email: req.body.email });
      if (response.length === 0)
         return res.status(400).send({
            message: 'Votre adresse e-mail est incorrect !',
            error: response
         });
      const user = response[0];
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid)
         return res.status(400).send({
            message: 'Votre mot de passe est incorrect !',
            error: passwordIsValid
         });
      const pattern = { id: user.id };
      jwt.sign(pattern, config.secret, {}, async (err, token) => {
            if (err) {
               return res.status(400).json({
                  message: 'Une erreur lors de la connexion via le token!',
                  error: err
               });
            }
            await UserModel.updateUser({
               created_token: null,
               updated_at: moment().toDate()
            }, user.id);
            res.json({
               ...user,
               token: token
            });
         }
      );
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur lors de la connexion!',
         error: error.message
      });
   }
};

exports.checkUserEmail = async (req, res) => {
   try {
      const response = await UserModel.getUserWhere({ email: req.params.email });
      if (response.length === 0)
         return res.status(400).send({
            message: 'Aucun personnel ne possède cette adresse e-mail !',
            error: response
         });
      res.json(response[0]);
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur lors de la connexion!',
         error: error.message
      });
   }
};

exports.resetPassword = async (req, res) => {
   try {
      const response = await UserModel.updateUser({
         password: bcrypt.hashSync(req.body.password, 8)
      }, req.body.id);
      res.json(response);
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur lors de la connexion!',
         error: error.message
      });
   }
};

exports.createUser = async (req, res) => {
   try {
      const data = {
         ...req.body,
         password: bcrypt.hashSync(req.body.password, 8),
         create_token: bcrypt.hashSync('create account token', 8)
      };
      const response = await UserModel.postUser(data);
      res.json(response);
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: error.message
      });
   }
};

exports.updateUser = async (req, res) => {
   try {
      const response = await UserModel.updateUser(req.body, req.params.id);
      res.json(response);
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: error.message
      });
   }
};

exports.changePassword = async (req, res) => {
   try {
      const response = await UserModel.getUserWhere({ id: req.params.id });
      const user = response[0];
      const passwordIsValid = bcrypt.compareSync(req.body.old_password, user.password);
      if (!passwordIsValid)
         return res.status(400).send({
            message: 'Votre mot de passe est incorrect !',
            error: passwordIsValid
         });
      const change_response = await UserModel.updateUser({
         password: bcrypt.hashSync(req.body.new_password, 8)
      }, user.id);
      res.json(change_response);
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: error.message
      });
   }
};

exports.deleteUser = async (req, res) => {
   try {
      const response = await UserModel.deleteUser(req.params.id);
      res.json(response);
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: error.message
      });
   }
};

exports.getUserBy = async (req, res) => {
   try {
      const response = await UserModel.getUserWhere(req.query);
      res.json(response);
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: error.message
      });
   }
};

exports.getUsers = async (req, res) => {
   try {
      const response = await UserModel.getUsers();
      res.json(response);
   } catch (error) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: error.message
      });
   }
};
