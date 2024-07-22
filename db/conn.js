const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('consultorio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log('Uhul! Temos conexão!');
}
catch(err) {
    console.log(`Desculpe, infelizmente não foi possível se conectar ao banco de dados devido ao erro: ${err}`);
}

module.exports = sequelize;