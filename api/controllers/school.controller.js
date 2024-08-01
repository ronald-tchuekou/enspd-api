/*
 * Copyright (c) 04/08/2022 07:48
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const SchoolModel = require('../models/school.model');
const moment = require('moment');

exports.createSchool = async (req, res) => {
   try {
      const document = req.body;
      const response = await SchoolModel.postSchool(document);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.updateSchool = async (req, res) => {
   try {
      const document = req.body;
      const response = await SchoolModel.updateSchool({
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

exports.deleteSchool = async (req, res) => {
   try {
      const response = await SchoolModel.deleteSchool(req.params.id);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.deleteAllSchool = async (req, res) => {
   try {
      const response = await SchoolModel.deleteAll();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getSchools = async (req, res) => {
   try {
      const response = await SchoolModel.getSchools();
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

exports.getSchoolBy = async (req, res) => {
   try {
      const response = await SchoolModel.getSchoolWhere(req.query);
      res.json(response);
   } catch (e) {
      res.status(400).json({
         message: 'Une erreur est survenue !',
         error: e.message
      });
   }
};

