const {Sequelize} = require("sequelize");


const db = new Sequelize('BRM', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  //  port: '8889' // por favor quitar esto, ya que en mi local tengo este puerto de mysql no el de default 3306
});

module.exports = db;