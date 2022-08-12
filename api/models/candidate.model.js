/*
 * Copyright (c) 11/08/2022 04:34
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');

const DBInstance = db_config.getDBInstance();
const tableName = 'candidates';

exports.CandidateTableName = tableName;

exports.createTable = () => {
   DBInstance.schema.hasTable(tableName).then(function(exists) {
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
               table.enum('cursus', ['Science Ingénieur', 'Ingénieur']);
               table.integer('niveau', 10);
               table.integer('filiere_choisie', 10);
               table.integer('option_choisie', 10);
               table.integer('diplome_entree', 10);
               table.boolean('admis').defaultTo(false);
               table.timestamps(true, true, false);
            })
            .asCallback(() => {
               console.log('Candidates table is ready!');
            });
      }
   });
};

exports.addAttenteColumn = () => {
   DBInstance.schema.hasColumn(tableName, 'attente')
      .then(exist => {
         if (!exist) {
            DBInstance.schema.table(tableName, (table) => {
               table.boolean('attente').defaultTo(false);
            }).then(() => console.log('Attente column is added to Candidates table.'));
         }
      });
};

exports.postCandidate = async (document) => await DBInstance
   .from(tableName)
   .insert(document);

exports.updateCandidate = async (document, id) => await DBInstance
   .where({ id })
   .from(tableName)
   .update(document);

exports.getCandidates = async () => await DBInstance
   .select()
   .table(tableName);

exports.getCandidateWhere = async (query) => await DBInstance
   .where({ query })
   .select()
   .table(tableName);

exports.deleteAll = async () => await DBInstance
   .delete()
   .table(tableName);

exports.deleteCandidate = async (id) => await DBInstance
   .where({ id })
   .delete()
   .table(tableName);
