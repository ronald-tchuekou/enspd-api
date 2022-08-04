/*
 * Copyright (c) 04/08/2022 06:40
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');

const DBInstance = db_config.getDBInstance();
const tableName = 'filieres';

exports.FiliereTableName = tableName;

exports.createTable = () => {
   DBInstance.schema.hasTable(tableName).then(function(exists) {
      if (!exists) {
         DBInstance.schema
            .createTable(tableName, (table) => {
               table.increments('id');
               table.string('code', 255);
               table.string('libelle', 255);
               table.timestamps(true, true, false);
            })
            .asCallback(() => {
               console.log('Filieres table is ready!');
            });
      }
   });
};

exports.postFiliere = async (document) => await DBInstance
   .from(tableName)
   .insert(document);

exports.updateFiliere = async (document, id) => await DBInstance
   .where({ id })
   .from(tableName)
   .update(document);

exports.getFilieres = async () => await DBInstance
   .select()
   .table(tableName);

exports.getFiliereWhere = async (query) => await DBInstance
   .where({ query })
   .select()
   .table(tableName);

exports.deleteAll = async () => await DBInstance
   .delete()
   .table(tableName);

exports.deleteFiliere = async (id) => await DBInstance
   .where({ id })
   .delete()
   .table(tableName);
