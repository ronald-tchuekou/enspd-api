/*
 * Copyright (c) 18/08/2022 03:30
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');

const DBInstance = db_config.getDBInstance();
const tableName = 'regions';

exports.RegionTableName = tableName;

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
               console.log('Regions table is ready!');
            });
      }
   });
};

exports.addColumns = () => {
   DBInstance.schema.hasColumn(tableName, 'abreviation')
      .then(exist => {
         if (!exist) {
            DBInstance.schema.table(tableName, (table) => {
               table.string('abreviation');
            }).then(() => console.log('Abreviation column is added to Candidates table.'));
         }
      });
};

exports.postRegion = async (document) => await DBInstance
   .from(tableName)
   .insert(document);

exports.updateRegion = async (document, id) => await DBInstance
   .where({ id })
   .from(tableName)
   .update(document);

exports.getRegions = async () => await DBInstance
   .select()
   .table(tableName);

exports.getRegionWhere = async (query) => await DBInstance
   .where(query)
   .select()
   .table(tableName);

exports.deleteAll = async () => await DBInstance
   .delete()
   .table(tableName);

exports.deleteRegion = async (id) => await DBInstance
   .where({ id })
   .delete()
   .table(tableName);
