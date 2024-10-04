import 'dotenv/config';
import express, { json } from 'express';
import chalk from 'chalk';
import connectToDb from './services/dbService.js';

const PORT = process.env.PORT || 8181;

const app = express();
app.use(json());
app.use(express.static('./public'));

// global error logging middleware
app.use((err, req, res, next) => {
  return console.log(chalk.red('[Server] ' + res));
});

app.listen(PORT, async () => {
  console.log(chalk.yellow(`[Server] Listening to port ${PORT}`));
  await connectToDb();
})