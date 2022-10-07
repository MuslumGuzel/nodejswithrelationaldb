import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import User from './Models/user.js';
import { getPosts } from './functions/getposts.js';
import { mergePosts } from './functions/mergeposts.js';

const app = express();
dotenv.config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DBPATH
  });

//middlewares
app.use(cors());
app.use(express.json());

//app.use("/api/auth", authRoute);
app.get('/', async (req, res) => {

    const users = await User.findAll();
    res.send(users);
})

app.get('/getposts', async (req, res) => {

    const postList = await getPosts(req.body.user_id, req.body.postIds);    

    res.json(postList);
})

app.get('/mergeposts', async (req, res) => {

    const postList = await mergePosts(req.body);    

    res.json(postList);
})

app.post('/user', async (req, res) => {

    const mus = await User.create(req.body);    

    res.json(mus);
})

app.use((err, req, res, next) => {

    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(port, hostname, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log(`Server running at http://${hostname}:${port}`);
});