import { Model, DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'D:/Dev/Installations/sqlite-tools-win32-x86-3390400/testDB.db'
  });
  
class User extends Model {
    
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    full_name: {
        type: DataTypes.STRING,
    },
    profile_picture: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.INTEGER,
    },
}, { sequelize, createdAt: false, updatedAt: false });

const user = new User({ id: 1 });
user.id; // 1

export default User;