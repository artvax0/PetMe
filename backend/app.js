import 'dotenv/config';
import express from 'express';
import chalk from 'chalk';
import connectToDb from './services/dbService.js';

const PORT = process.env.PORT || 8181;

const app = express();

app.post('/')

app.listen(PORT, async () => {
  console.log(chalk.yellow(`Server is listening to port ${PORT}`));
  await connectToDb();
})