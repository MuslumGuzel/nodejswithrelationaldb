import { Model, DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'D:/Dev/Installations/sqlite-tools-win32-x86-3390400/testDB.db'
  });
  
class Post extends Model {
    
}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    image: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.INTEGER,
    },
}, { sequelize, createdAt: false, updatedAt: false });

const post = new Post({ id: 1 });
post.id; // 1

export default Post;