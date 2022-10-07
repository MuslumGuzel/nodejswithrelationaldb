import { Model, DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'D:/Dev/Installations/sqlite-tools-win32-x86-3390400/testDB.db'
  });
  
class Follow extends Model {
    
}

Follow.init({
    follower_id: {
        type: DataTypes.INTEGER,       
        primaryKey: true, 
    },
    following_id: {
        type: DataTypes.INTEGER,
    },
    created_at: {
        type: DataTypes.INTEGER,
    },
}, { sequelize, createdAt: false, updatedAt: false, id: false });


export default Follow;