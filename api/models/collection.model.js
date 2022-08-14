/*
 * Copyright (c) 14/08/2022 17:43
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');

const DBInstance = db_config.getDBInstance();
const tableName = 'collections';

exports.CollectionTableName = tableName;

exports.createTable = () => {
   DBInstance.schema.hasTable(tableName).then(function(exists) {
      if (!exists) {
         DBInstance.schema.createTable(tableName, (table) => {
            table.increments('id');
            table.string('name', 255).unique();
            table.integer('candidate_count', 10);
            table.integer('admis_candidate_count', 10);
            table.integer('attente_candidate_count', 10);
            table.integer('level', 10);
            table.enum('cursus', ['Science Ingénieur', 'Ingénieur']);
            table.timestamps(true, true, false);
         }).asCallback(() => {
            console.log('Collections table is ready!');
         });
      }
   });
};

exports.postCollection = async (document) => await DBInstance
   .from(tableName)
   .insert(document);

exports.updateCollection = async (document, id) => await DBInstance
   .where({ id })
   .from(tableName)
   .update(document);

exports.getCollections = async () => await DBInstance
   .select()
   .table(tableName);

exports.getCollectionWhere = async (query) => await DBInstance
   .where(query)
   .select()
   .table(tableName);

exports.deleteCollection = async (id) => await DBInstance
   .where({ id })
   .delete()
   .table(tableName);


