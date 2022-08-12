/*
 * Copyright (c) 12/08/2022 07:12
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');
const { FiliereTableName } = require('./filiere.model');

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

exports.addFiliereIdColumn = () => {
   DBInstance.schema.hasColumn(tableName, 'filiere_id').then(exist => {
      if (!exist) {
         DBInstance.schema.table(tableName, table => {
            table.integer('filiere_id', 10)
               .unsigned()
               .index()
               .references('id')
               .inTable(FiliereTableName);
         }).then(() => console.log('Add filiere_id column in options table.'));
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
