var express = require("express");
const port = 8080;
var app = express();

// routes
const eleveRoutes = require('./routes/eleveRouter');
const matiereRoutes = require('./routes/matiereRouter');
const profRoutes = require('./routes/profRoutes');
const classeRoutes = require('./routes/classeRoutes');

//Middleware
app.use(express.json())

app.use('/api', eleveRoutes);
app.use('/api', matiereRoutes);
app.use('/api', profRoutes);
app.use('/api', classeRoutes);

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