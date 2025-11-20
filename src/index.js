var express = require("express");
const port = 8080;
var app = express();

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger.js');

// routes
const eleveRoutes = require('./routes/eleveRouter');
const matiereRoutes = require('./routes/matiereRouter');
const profRoutes = require('./routes/profRoutes');
const classeRoutes = require('./routes/classeRoutes');
const noteRoutes = require('./routes/noteRoutes');
const trimestreRoutes = require('./routes/trimestreRoutes');

//Middleware
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
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
    console.log(`Serveur à l'écoute sur le port ${port} !`)
});