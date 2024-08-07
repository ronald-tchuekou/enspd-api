/*
 * Copyright (c) 19/08/2022 08:32
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');
const { CollectionTableName } = require('./collection.model');

const DBInstance = db_config.getDBInstance();
const tableName = 'candidates';

exports.CandidateTableName = tableName;

exports.createTable = () => {
   DBInstance.schema.hasTable(tableName).then(function (exists) {
      if (!exists) {
         DBInstance.schema
            .createTable(tableName, (table) => {
               table.increments('id');
               table.string('nom', 255);
               table.string('prenom', 255);
               table.date('date_nais');
               table.string('lieu_nais', 255);
               table.integer('region_origine', 10);
               table.integer('depart_origine', 10);
               table.string('statut_mat', 255);
               table.enum('sexe', ['Masculin', 'Feminin']);
               table.string('nationalite', 255);
               table.string('nom_pere', 255);
               table.string('prof_pere', 255);
               table.string('nom_mere', 255);
               table.string('prof_mere', 255);
               table.enum('cursus', [
                  'Science Ingénieur',
                  'Ingénieur',
               ]);
               table.integer('niveau', 10);
               table.integer('filiere_choisie', 10);
               table.integer('option_choisie', 10);
               table.integer('diplome_entree', 10);
               table.boolean('admis').defaultTo(false);
               table.integer('school1', 10);
               table.integer('school2', 10);
               table.integer('school3', 10);
               table.timestamps(true, true, false);
            })
            .asCallback(() => {
               console.log('Candidates table is ready!');
            });
      }
   });
};

exports.addColumns = () => {
   DBInstance.schema.hasColumn(tableName, 'attente').then((exist) => {
      if (!exist) {
         DBInstance.schema
            .table(tableName, (table) => {
               table.boolean('attente').defaultTo(false);
            })
            .then(() =>
               console.log(
                  'Attente column is added to Candidates table.'
               )
            );
      }
   });
   DBInstance.schema
      .hasColumn(tableName, 'collection_id')
      .then((exist) => {
         if (!exist) {
            DBInstance.schema
               .table(tableName, (table) => {
                  table
                     .integer('collection_id', 10)
                     .nullable()
                     .unsigned()
                     .index()
                     .references('id')
                     .inTable(CollectionTableName);
               })
               .then(() =>
                  console.log(
                     'Collection_id column is added to Candidates table.'
                  )
               );
         }
      });
   DBInstance.schema.hasColumn(tableName, 'note1').then((exist) => {
      if (!exist) {
         DBInstance.schema
            .table(tableName, (table) => {
               table.float('note1', 10);
            })
            .then(() =>
               console.log(
                  'Note1 column is added to Candidates table.'
               )
            );
      }
   });
   DBInstance.schema.hasColumn(tableName, 'note2').then((exist) => {
      if (!exist) {
         DBInstance.schema
            .table(tableName, (table) => {
               table.float('note2', 10);
            })
            .then(() =>
               console.log(
                  'Note2 column is added to Candidates table.'
               )
            );
      }
   });
   DBInstance.schema.hasColumn(tableName, 'note3').then((exist) => {
      if (!exist) {
         DBInstance.schema
            .table(tableName, (table) => {
               table.float('note3', 10);
            })
            .then(() =>
               console.log(
                  'Note3 column is added to Candidates table.'
               )
            );
      }
   });
   DBInstance.schema.hasColumn(tableName, 'range').then((exist) => {
      if (!exist) {
         DBInstance.schema
            .table(tableName, (table) => {
               table.integer('range', 10);
            })
            .then(() =>
               console.log(
                  'Range column is added to Candidates table.'
               )
            );
      }
   });
   DBInstance.schema
      .hasColumn(tableName, 'anonymous_num')
      .then((exist) => {
         if (!exist) {
            DBInstance.schema
               .table(tableName, (table) => {
                  table.integer('anonymous_num', 10);
               })
               .then(() =>
                  console.log(
                     'Anonymous number column is added to Candidates table.'
                  )
               );
         }
      });
   DBInstance.schema
      .hasColumn(tableName, 'anonymous_num2')
      .then((exist) => {
         if (!exist) {
            DBInstance.schema
               .table(tableName, (table) => {
                  table.integer('anonymous_num2', 50);
               })
               .then(() =>
                  console.log(
                     'Anonymous number 2 column is added to Candidates table.'
                  )
               );
         }
      });
   DBInstance.schema.hasColumn(tableName, 'average').then((exist) => {
      if (!exist) {
         DBInstance.schema
            .table(tableName, (table) => {
               table.float('average', 50);
            })
            .then(() =>
               console.log(
                  'Average number column is added to Candidates table.'
               )
            );
      }
   });
};

exports.postCandidate = async (document) =>
   await DBInstance.from(tableName).insert(document);

exports.updateCandidate = async (document, id) =>
   await DBInstance.where({ id }).from(tableName).update(document);

exports.getCandidates = async () =>
   await DBInstance.select()
      .table(tableName)
      .orderBy('average', 'desc');

exports.getCandidateWhere = async (query) =>
   await DBInstance.where(query)
      .select()
      .table(tableName)
      .orderBy('average', 'desc');

exports.getPassCandidateWhere = async (
   collection_id,
   attente,
   admis
) =>
   await DBInstance.where({
      collection_id,
      attente,
   })
      .orWhere({
         collection_id,
         admis,
      })
      .select()
      .table(tableName);

exports.deleteAll = async () =>
   await DBInstance.delete().table(tableName);

exports.deleteCandidate = async (id) =>
   await DBInstance.where({ id }).delete().table(tableName);

exports.deleteCandidates = async (collection_id) =>
   await DBInstance.where({ collection_id })
      .delete()
      .table(tableName);

exports.moveCandidate = async (config) =>
   await DBInstance.where({
      collection_id: config.fromCollectionId,
      attente: config.attente,
      admis: config.admis,
      [config.choiceType]: config.schoolId,
   })
      .from(tableName)
      .update({ collection_id: config.toCollectionId });
