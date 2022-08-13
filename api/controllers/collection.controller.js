/*
 * Copyright (c) 13/08/2022 17:43
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const CollectionModel = require('../models/collection.model');
const moment = require('moment');

exports.createCollection = async (req, res) => {
   try {
      const document = req.body;
      const response = await CollectionModel.postCollection(document);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.updateCollection = async (req, res) => {
   try {
      const document = req.body;
      const response = await CollectionModel.updateCollection({
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

exports.deleteCollection = async (req, res) => {
   try {
      const response = await CollectionModel.deleteCollection(req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getCollections = async (req, res) => {
   try {
      const response = await CollectionModel.getCollections();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getCollectionBy = async (req, res) => {
   try {
      const response = await CollectionModel.getCollectionWhere(req.query);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

