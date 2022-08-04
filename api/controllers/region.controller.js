/*
 * Copyright (c) 04/08/2022 07:28
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const RegionModel = require('../models/region.model');
const moment = require('moment');

exports.createRegion = async (req, res) => {
   try {
      const document = req.body;
      const response = await RegionModel.postRegion(document);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.updateRegion = async (req, res) => {
   try {
      const document = req.body;
      const response = await RegionModel.updateRegion({
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

exports.deleteRegion = async (req, res) => {
   try {
      const response = await RegionModel.deleteRegion(req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteAllRegion = async (req, res) => {
   try {
      const response = await RegionModel.deleteAll();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getRegions = async (req, res) => {
   try {
      const response = await RegionModel.getRegions();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getRegionBy = async (req, res) => {
   try {
      const response = await RegionModel.getRegionWhere(req.query);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

