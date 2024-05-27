const express = require('express');
const exphbs = require('express-handlebars');


// Import routes
const consultorioRotas = require('./routes/consultorioRotas');

// Import controller
const ControladorConsultorio = require('./controllers/ControladorConsultorio');

const app = express();

// Template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Static path
app.use(express.static('public'));

app.use('/sistema', consultorioRotas);

app.get('/', ControladorConsultorio.mostrarContemplados);

app.listen(3000);