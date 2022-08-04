/*
 * Copyright (c) 04/08/2022 07:48
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const DiplomeModel = require('../models/diplome.model');
const moment = require('moment');

exports.createDiplome = async (req, res) => {
   try {
      const document = req.body;
      const response = await DiplomeModel.postDiplome(document);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.updateDiplome = async (req, res) => {
   try {
      const document = req.body;
      const response = await DiplomeModel.updateDiplome({
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

exports.deleteDiplome = async (req, res) => {
   try {
      const response = await DiplomeModel.deleteDiplome(req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteAllDiplome = async (req, res) => {
   try {
      const response = await DiplomeModel.deleteAll();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getDiplomes = async (req, res) => {
   try {
      const response = await DiplomeModel.getDiplomes();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getDiplomeBy = async (req, res) => {
   try {
      const response = await DiplomeModel.getDiplomeWhere(req.query);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

