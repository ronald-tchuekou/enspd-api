/*
 * Copyright (c) 15/08/2022 07:20
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');

const DBInstance = db_config.getDBInstance();
const tableName = 'diplomes';

exports.DiplomeTableName = tableName;

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
               console.log('Diplomes table is ready!');
            });
      }
   });
};

exports.postDiplome = async (document) => await DBInstance
   .from(tableName)
   .insert(document);

exports.updateDiplome = async (document, id) => await DBInstance
   .where({ id })
   .from(tableName)
   .update(document);

exports.getDiplomes = async () => await DBInstance
   .select()
   .table(tableName);

exports.getDiplomeWhere = async (query) => await DBInstance
   .where(query)
   .select()
   .table(tableName);

exports.deleteAll = async () => await DBInstance
   .delete()
   .table(tableName);

exports.deleteDiplome = async (id) => await DBInstance
   .where({ id })
   .delete()
   .table(tableName);
