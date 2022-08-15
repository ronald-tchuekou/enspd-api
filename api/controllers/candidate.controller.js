/*
 * Copyright (c) 15/08/2022 08:11
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const CandidateModel = require('../models/candidate.model');
const moment = require('moment');

exports.createCandidate = async (req, res) => {
   try {
      const document = req.body;
      const response = await CandidateModel.postCandidate(document);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.updateCandidate = async (req, res) => {
   try {
      const document = req.body;
      const response = await CandidateModel.updateCandidate({
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

exports.deleteCandidate = async (req, res) => {
   try {
      const response = await CandidateModel.deleteCandidate(req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteAllCandidate = async (req, res) => {
   try {
      const response = await CandidateModel.deleteAll();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getCandidates = async (req, res) => {
   try {
      const response = await CandidateModel.getCandidates();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getCandidateBy = async (req, res) => {
   try {
      const response = await CandidateModel.getCandidateWhere(req.query);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getPassCandidateBy = async (req, res) => {
   try {
      const response = await CandidateModel.getPassCandidateWhere(
         req.query.collection_id,
         req.query.attente,
         req.query.admis
      );
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

