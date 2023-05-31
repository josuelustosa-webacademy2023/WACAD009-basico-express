import { Router } from 'express';

const router = Router();
const publicPath = `${process.cwd()}/public`;

router.get('/', (req, res) => {
  res.send('Aplicação Express utilizando TypeScript!');
});

router.get('/statics-files-page', (req, res) => {
  res.sendFile(`${publicPath}/html/index.html`);
});

export default router;
