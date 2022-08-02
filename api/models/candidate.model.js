/*
 * Copyright (c) 01/08/2022 06:49
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
               table.string('sexe', 255);
               table.string('nationalite', 255);
               table.string('langue', 255);
               table.string('cni_num', 255);
               table.date('cni_date');
               table.string('dip_equiv', 255);
               table.string('opt_equiv', 255);
               table.string('opt_comp', 255);
               table.string('telephone', 255);
               table.string('statut_mat', 255);
               table.string('tentative', 255);
               table.string('sms', 255);
               table.string('num_ds_phys', 255);
               table.integer('photo_id');
               table.integer('centre_id');
               table.integer('diplome_requis_par_option_id');
               table.string('mention', 255);
               table.string('annee_dip', 255);
               table.string('dpt_origine', 255);
               table.string('cni_lieu', 255);
               table.string('email', 255);
               table.string('centre_origine', 255);
               table.string('deleted', 255);
               table.string('deletedby', 255);
               table.string('deletedon', 255);
               table.string('updated', 255);
               table.string('updatedon', 255);
               table.string('updatedby', 255);
               table.string('centre_depot', 255);
               table.string('nom_pere', 255);
               table.string('prof_pere', 255);
               table.string('nom_mere', 255);
               table.string('prof_mere', 255);
               table.string('tel_tut', 255);
               table.timestamps(true, true, false);
            })
            .asCallback(() => {
               console.log('Candidates table is ready!');
            });
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
