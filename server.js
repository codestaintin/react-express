/* eslint-disable no-console */
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './server/routes/routes';
import config from './server/config/config';
import GroceryItem from './server/models/groceryItemsModel';

dotenv.config();

const server = express();
const router = express.Router();
const port = parseInt(process.env.PORT, 10) || 3000;

routes(router);

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

if (config.use_env_variable) {
  mongoose.connect(process.env[config.use_env_variable]);
} else {
  const { prefix, host, database } = config;
  const mongoUri = `${prefix}://${host}:${config.port}/${database}`;
  mongoose.connect(mongoUri);
}
const db = mongoose.connection;

server.use('/api/v1', router);

server.get('*', (req, res) => {
  res.status(404).send({
    message: 'Route does not exist'
  });
});

const app = http.createServer(server);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Error starting the server');
  }
  db.on('error', (err) => {
    throw new Error(`Error connecting to database: ${config.database}`);
  });
  db.on('open', () => {
    console.info(`Connected to database: ${config.database}`);
    console.log(`App is running on port ${port}`);
  });
});

export default server;