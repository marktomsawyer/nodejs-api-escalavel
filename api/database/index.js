const Sequelize = require('sequelize')
const config = require('config')

const instancia = new Sequelize(
    config.get('mysql.banco'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    //config.get('mysql.port'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql',
        port: config.get('mysql.porta')

    }
)

module.exports = instancia