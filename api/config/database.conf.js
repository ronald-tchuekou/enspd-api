/*
 * Copyright (c) 04/08/2022 14:10
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

const knex = require('knex');

/**
 * @return {Knex<any, unknown[]>}
 */
exports.getDBInstance = () =>
   knex({
      client: 'mysql',
      connection: {
         host: 'localhost',
         port: 3306,
         user: 'root',
         password: '',
         database: 'enspd_database',
      },
   });
