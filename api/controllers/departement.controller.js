/*
 * Copyright (c) 05/08/2022 06:39
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const DepartementModel = require('../models/departement.model');
const moment = require('moment');

exports.createDepartement = async (req, res) => {
   try {
      const document = req.body;
      const response = await DepartementModel.postDepartement(document);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.updateDepartement = async (req, res) => {
   try {
      const document = req.body;
      const response = await DepartementModel.updateDepartement({
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

exports.deleteDepartement = async (req, res) => {
   try {
      const response = await DepartementModel.deleteDepartement(req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteAllDepartement = async (req, res) => {
   try {
      const response = await DepartementModel.deleteAll();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getDepartements = async (req, res) => {
   try {
      const response = await DepartementModel.getDepartements();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getDepartementBy = async (req, res) => {
   try {
      const response = await DepartementModel.getDepartementWhere(req.query);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

