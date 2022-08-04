/*
 * Copyright (c) 04/08/2022 06:53
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');

const DBInstance = db_config.getDBInstance();
const tableName = 'options';

exports.OptionTableName = tableName;

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
               console.log('Options table is ready!');
            });
      }
   });
};

exports.postOption = async (document) => await DBInstance
   .from(tableName)
   .insert(document);

exports.updateOption = async (document, id) => await DBInstance
   .where({ id })
   .from(tableName)
   .update(document);

exports.getOptions = async () => await DBInstance
   .select()
   .table(tableName);

exports.getOptionWhere = async (query) => await DBInstance
   .where({ query })
   .select()
   .table(tableName);

exports.deleteAll = async () => await DBInstance
   .delete()
   .table(tableName);

exports.deleteOption = async (id) => await DBInstance
   .where({ id })
   .delete()
   .table(tableName);
