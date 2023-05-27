const { Table, Column, DataType } = require('sequelize-typescript');
const { BaseModel } = require('./base/baseModel');

@Table({tableName: 'todo'})
class Todo extends BaseModel{
    @Column({type:DataType.STRING})
    todo;
    @Column({type:DataType.DATE})
    creationDate;
    @Column({type:DataType.BOOLEAN})
    isComplete;

    static initialize(sequelize) {
        super.initialize(sequelize);
    }

}

module.exports = {Todo}