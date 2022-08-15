/*
 * Copyright (c) 15/08/2022 07:20
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');

const DBInstance = db_config.getDBInstance();
const tableName = 'departements';

exports.DepartementTableName = tableName;

exports.createTable = () => {
   DBInstance.schema.hasTable(tableName).then(function(exists) {
      if (!exists) {
         DBInstance.schema
            .createTable(tableName, (table) => {
               table.increments('id');
               table.string('libelle', 255);
               table.timestamps(true, true, false);
            })
            .asCallback(() => {
               console.log('Departements table is ready!');
            });
      }
   });
};

exports.postDepartement = async (document) => await DBInstance
   .from(tableName)
   .insert(document);

exports.updateDepartement = async (document, id) => await DBInstance
   .where({ id })
   .from(tableName)
   .update(document);

exports.getDepartements = async () => await DBInstance
   .select()
   .table(tableName);

exports.getDepartementWhere = async (query) => await DBInstance
   .where(query)
   .select()
   .table(tableName);

exports.deleteAll = async () => await DBInstance
   .delete()
   .table(tableName);

exports.deleteDepartement = async (id) => await DBInstance
   .where({ id })
   .delete()
   .table(tableName);
