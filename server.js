/*
 * Copyright (c) 04/08/2022 07:28
 * @author Ronald Tchuekou
 * @email ronaldtchuekou@gmail.com
 */

require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const authRoutes = require('./api/routes/auth.route');
const candidateRoutes = require('./api/routes/candidate.route');
const filiereRoutes = require('./api/routes/filiere.route');
const optionRoutes = require('./api/routes/option.route');
const regionRoutes = require('./api/routes/region.route');

// Get the application.
const app = express();

// Config express server middlewares.
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({
   limit: '50mb',
   parameterLimit: 100000,
   extended: true
}));
app.use((
   req,
   res,
   next
) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token'
   );
   if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
   }
   next();
});
app.use(express.static(__dirname + '/public'));

// Connection for mysql database.
require('./api/models/candidate.model').createTable();
require('./api/models/filiere.model').createTable();
require('./api/models/option.model').createTable();
require('./api/models/region.model').createTable();
require('./api/models/user.model').createTable();

// Routes
app.get('/', (req, res) => {
   res.send('Welcome to api of ENSPD application');
});
app.use('/auth', authRoutes);
app.use('/candidate', candidateRoutes);
app.use('/filiere', filiereRoutes);
app.use('/option', optionRoutes);
app.use('/region', regionRoutes);

// Server listening.
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}..`));
