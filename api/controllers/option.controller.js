/*
 * Copyright (c) 04/08/2022 06:53
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const OptionModel = require('../models/option.model');
const moment = require('moment');

exports.createOption = async (req, res) => {
   try {
      const document = req.body;
      const response = await OptionModel.postOption(document);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.updateOption = async (req, res) => {
   try {
      const document = req.body;
      const response = await OptionModel.updateOption({
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

exports.deleteOption = async (req, res) => {
   try {
      const response = await OptionModel.deleteOption(req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteAllOption = async (req, res) => {
   try {
      const response = await OptionModel.deleteAll();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getOptions = async (req, res) => {
   try {
      const response = await OptionModel.getOptions();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getOptionBy = async (req, res) => {
   try {
      const response = await OptionModel.getOptionWhere(req.query);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

