/*
 * Copyright (c) 01/08/2022 06:50
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const db_config = require('../config/database.conf');
const bcrypt = require('bcrypt');

const DBInstance = db_config.getDBInstance();
const tableName = 'users';

exports.ClasseTableName = tableName;

exports.createTable = () => {
   DBInstance.schema.hasTable(tableName).then(function(exists) {
      if (!exists) {
         DBInstance.schema.createTable(tableName, (table) => {
            table.increments('id');
            table.string('name', 255);
            table.string('surname', 255);
            table.string('nationality', 255);
            table.date('birthday');
            table.string('birthday_place', 255);
            table.enum('sex', ['M', 'F']);
            table.string('email', 255).unique().index();
            table.string('phone', 255);
            table.string('password', 255);
            table.string('created_token', 255);
            table.timestamps(true, true, false);
         }).asCallback(() => {
            seed().then(() => 'Users seed is set.');
            console.log('Users table is ready!');
         });
      }
   });
};

const seed = async () => await DBInstance
   .from(tableName)
   .insert({
      name: 'Admin',
      surname: 'Admin',
      nationality: 'CMR',
      birthday: '1999-02-10',
      birthday_place: 'Douala',
      sex: 'M',
      email: 'admin@enspd.cm',
      phone: '000000000',
      password: bcrypt.hashSync('password', 8)
   });

exports.postUser = async (document) => await DBInstance
   .from(tableName)
   .insert(document);

exports.updateUser = async (document, id) => await DBInstance
   .where({ id })
   .from(tableName)
   .update(document);

exports.getUsers = async () => await DBInstance
   .select()
   .table(tableName);

exports.getUserWhere = async (query) => await DBInstance
   .where(query)
   .select()
   .table(tableName);

exports.deleteUser = async (id) => await DBInstance
   .where({ id })
   .delete()
   .table(tableName);


