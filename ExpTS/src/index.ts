import express, { Request, Response, NextFunction } from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
//import morgan from 'morgan';
import logger from './middlewares/logger';
import loggerUser from './middlewares/loggerUser';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 3333;
const publicPath = `${process.cwd()}/public`;

app.use(logger('completo')); // Gerando logs no console
app.use(loggerUser('completo')); // Salvando logs em "logs/logs.txt"

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Hello World!');
  next();
});

app.get('/', (req, res) => {
  res.send('Aplicação Express utilizando TypeScript!');
});

// Lendo um arquivo (HMTL)
app.get('/statics-files-page', (req, res) => {
  res.sendFile(`${publicPath}/html/index.html`);
});

// Renderizando arquivos estáticos
app.use('/css/style.css', express.static(`${publicPath}/css/style.css`));
app.use('/js/main.js', express.static(`${publicPath}/js/main.js`));

app.listen(PORT, () => {
  console.log(`App Express iniciada na porta ${PORT}.`);
});
