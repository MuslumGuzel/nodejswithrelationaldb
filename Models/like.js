import { Model, DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'D:/Dev/Installations/sqlite-tools-win32-x86-3390400/testDB.db'
  });
  
class Like extends Model {
    
}

Like.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },    
    created_at: {
        type: DataTypes.INTEGER,
    },
}, { sequelize, createdAt: false, updatedAt: false });

const like = new Like({ id: 1 });
like.id; // 1

export default Like;