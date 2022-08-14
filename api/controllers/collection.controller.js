/*
 * Copyright (c) 14/08/2022 13:39
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const CollectionModel = require('../models/collection.model');
const CandidateModel = require('../models/candidate.model');
const moment = require('moment');

exports.createCollection = async (req, res) => {
   try {
      const document = req.body;
      const response = await CollectionModel.postCollection(document);
      const getResponse = await CollectionModel.getCollectionWhere({ id: response[0] });
      res.json(getResponse[0]);
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
      await CollectionModel.updateCollection({
         ...document,
         updated_at: moment().toDate()
      }, req.params.id);
      const getResponse = await CollectionModel.getCollectionWhere({ id: req.params.id });
      res.json(getResponse[0]);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteCollection = async (req, res) => {
   try {
      await CandidateModel.deleteCandidates(req.params.id);
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

