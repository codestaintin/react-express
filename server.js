import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import logger from 'morgan';

const port = parseInt(process.env.PORT, 10) || 3000;

const server = express();

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('*', (req, res) => {
  res.status(404).send({
    message: 'Route does not exist'
  });
});

const app = http.createServer(server);

app.listen(port, () => {
  console.log("App is running on port " + port);
});

export default server;
