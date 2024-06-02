const express = require('express');
const exphbs = require('express-handlebars');
const flash = require('express-flash');
const session = require('express-session');


// Import routes
const consultorioRotas = require('./routes/consultorioRotas');

// Import controller
const ControladorConsultorio = require('./controllers/ControladorConsultorio');

const app = express();

app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));

// Template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Flash messages
app.use(flash());

// Static path
app.use(express.static('public'));

app.use('/sistema', consultorioRotas);

app.get('/', ControladorConsultorio.mostrarContemplados);

app.listen(3000);