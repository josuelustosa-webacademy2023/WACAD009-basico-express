import express, { Request, Response, NextFunction } from 'express';

import router from './router/router';

import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';

import logger from './middlewares/logger';
import loggerUser from './middlewares/loggerUser';

import { engine } from 'express-handlebars';

import sass from 'node-sass-middleware';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 3333;

const publicPath = `${process.cwd()}/public`; // caminho da pasta de arquivos estáticos

app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
    layoutsDir: `${__dirname}/views/layout`,
  }),
);

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(router); // Criando as rotas da aplicação

app.use(logger('completo')); // Gerando logs no console
app.use(loggerUser('completo')); // Salvando logs em "logs/logs.txt"

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Hello World!');
  next();
});

// Utilizando sass
app.use(
  sass({
    src: `${publicPath}/scss`,
    dest: `${publicPath}/css`,
    outputStyle: 'compressed',
    prefix: '/css'
  }),
);

// Renderizando arquivos estáticos
app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));
app.use('/images', express.static(`${publicPath}/images`));

app.listen(PORT, () => {
  console.log(`App Express iniciada na porta ${PORT}.`);
});
