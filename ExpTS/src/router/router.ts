import { Router } from 'express';

const router = Router();
const publicPath = `${process.cwd()}/public`;

router.get('/', (req, res) => {
  res.send('Aplicação Express utilizando TypeScript!');
});

router.get('/statics-files-page', (req, res) => {
  res.sendFile(`${publicPath}/html/index.html`);
});

router.get('/hb1', (req, res) => {
  res.render('hb1', {
    uf: 'Universidade Federal do Amazonas',
    layout: false,
  });
});

router.get('/hb2', (req, res) => {
  const profs = [
    { nome: 'Tayana Conte', sala: 1234 },
    { nome: 'Horácio Fernandes', sala: 1235 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1237 },
  ];

  res.render('hb2', {
    profs,
    layout: false,
  });
});

router.get('/hb3', (req, res) => {
  res.render('hb3', {
    nome: 'Express',
    tipo: 'Framework',
    poweredByNode: true,
    layout: false,
  });
});

export default router;
