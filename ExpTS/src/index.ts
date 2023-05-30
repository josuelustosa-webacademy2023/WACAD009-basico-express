import express, { Request, Response, NextFunction } from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
//import morgan from 'morgan';
import logger from './middlewares/logger';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 3333;

app.use(logger('completo'));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Hello World!');
  next();
});

app.get('/', (req, res) => {
  res.send('Aplicação Express utilizando TypeScript!');
});

app.listen(PORT, () => {
  console.log(`App Express iniciada na porta ${PORT}.`);
});
