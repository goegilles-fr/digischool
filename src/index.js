var express = require("express");
const dotenv = require('dotenv');
const port = 8080;
dotenv.config();
var app = express();


// Security
const helmet = require('helmet');
const helmetOptions = require('./configs/helmet.js');
app.use(helmet(helmetOptions));

// CORS
const corsWhitelist = ['http://localhost:4200', 'https://digischool.goegilles.fr/'];
app.use(function (req, res, next) {
  if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  }
  next();
})

// Rate limiter
const limiter = require('./configs/rate-limiter.js');
app.use(limiter);

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./configs/swagger.js');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

//Middleware
app.use(express.json());

// JWT
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);

const jwtConfig = require('./configs/jwt.js');
app.use(jwtConfig);

// routes
const eleveRoutes = require('./routes/eleveRoutes');
const matiereRoutes = require('./routes/matiereRoutes');
const profRoutes = require('./routes/profRoutes');
const classeRoutes = require('./routes/classeRoutes');
const noteRoutes = require('./routes/noteRoutes');
const trimestreRoutes = require('./routes/trimestreRoutes');


app.use('/api', eleveRoutes);
app.use('/api', matiereRoutes);
app.use('/api', profRoutes);
app.use('/api', classeRoutes);
app.use('/api', noteRoutes);
app.use('/api', trimestreRoutes);

// Handle error 404
app.use(function(req, res) {
  res.status(404);

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port} ! http://localhost:${port}`);
});