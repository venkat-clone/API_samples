// BaseModel.js
const { Model, DataTypes } = require('sequelize');

class BaseModel extends Model {
    static initialize(sequelize) {
        this.init({}, { sequelize });
    }
}

module.exports = { BaseModel };
