// This website requires a MySQL database called "consultorio" to work. The user must be named "root"
// and the password must be null! The host needs to be "localhost", too. These requirements all derive
// from the creator's choice of using Sequelize to dialog with a MySQL database!

// Importing dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const flash = require('express-flash');
const session = require('express-session');


// Importing routes
const consultorioRotas = require('./routes/consultorioRotas');

// Importing controller
const ControladorConsultorio = require('./controllers/ControladorConsultorio');

// Importing database
const conn = require('./db/conn');

// Importing Model
const Doenca = require('./models/Doenca');

// Starting app
const app = express();

// Configuring app
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Stating the emplate engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Applying flash messages
app.use(flash());

// Stating the static path
app.use(express.static('public'));

// Specifying path
app.use('/sistema', consultorioRotas);

// Initiating homepage
app.get('/', ControladorConsultorio.mostrarContemplados);

// Synchronizing the database, then starting the program on port 3000
conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))