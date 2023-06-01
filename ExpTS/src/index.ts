import express, { Request, Response, NextFunction } from 'express';

import router from './router/router';

import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';

import logger from './middlewares/logger';
import loggerUser from './middlewares/loggerUser';

import { engine } from 'express-handlebars';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 3333;
const publicPath = `${process.cwd()}/public`;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`)

app.use(router); // Criando as rotas da aplicação

app.use(logger('completo')); // Gerando logs no console
app.use(loggerUser('completo')); // Salvando logs em "logs/logs.txt"

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Hello World!');
  next();
});

// Renderizando arquivos estáticos
app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));

app.listen(PORT, () => {
  console.log(`App Express iniciada na porta ${PORT}.`);
});
