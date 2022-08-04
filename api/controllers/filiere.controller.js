/*
 * Copyright (c) 01/08/2022 06:13
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const FiliereModel = require('../models/filiere.model');
const moment = require('moment');

exports.createFiliere = async (req, res) => {
   try {
      const document = req.body;
      const response = await FiliereModel.postFiliere(document);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.updateFiliere = async (req, res) => {
   try {
      const document = req.body;
      const response = await FiliereModel.updateFiliere({
         ...document,
         updated_at: moment().toDate()
      }, req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteFiliere = async (req, res) => {
   try {
      const response = await FiliereModel.deleteFiliere(req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteAllFiliere = async (req, res) => {
   try {
      const response = await FiliereModel.deleteAll();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getFilieres = async (req, res) => {
   try {
      const response = await FiliereModel.getFilieres();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getFiliereBy = async (req, res) => {
   try {
      const response = await FiliereModel.getFiliereWhere(req.query);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

