import { Request, Response } from 'express-serve-static-core';

const publicPath = `${process.cwd()}/public`;

const welcome = (req: Request, res: Response) => {
  res.send(req.params.nome);
};

const staticsFiles = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
};

const loremIpsumGenerator = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/lorem-ipsum.html`);
};

const homePage = (req: Request, res: Response) => {
  const pagesLinks = [
    // { name: 'Início', path: '/' },
    { name: 'Hb #1', path: '/hb1' },
    { name: 'Hb #2', path: '/hb2' },
    { name: 'Hb #3', path: '/hb3' },
    { name: 'Hb #4', path: '/hb4' },
    { name: 'Hb #5', path: '/hb5' },
    { name: 'Rota com Nome', path: '/welcome/Josué' },
    { name: 'Arquivos Estáticos', path: '/statics-files-page' },
    { name: 'Gerador de Lorem Ipsum', path: '/lorem-ipsum-generator' },
  ];

  res.render('main/home', {
    pagesLinks,
  });
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    uf: 'Universidade Federal do Amazonas',
  });
};

const hb2 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Tayana Conte', sala: 1234 },
    { nome: 'Horácio Fernandes', sala: 1235 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1237 },
  ];

  res.render('main/hb2', {
    profs,
  });
};

const hb3 = (req: Request, res: Response) => {
  res.render('main/hb3', {
    nome: 'Express',
    tipo: 'Framework',
    poweredByNode: true,
  });
};

const hb4 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Tayana Conte', sala: 1234 },
    { nome: 'Horácio Fernandes', sala: 1235 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1237 },
  ];

  res.render('main/hb4', {
    profs,
  });
};

const hb5 = (req: Request, res: Response) => {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM Tool', poweredByNodejs: true },
  ];

  res.render('main/hb5', {
    technologies,
  });
};

export default {
  welcome,
  homePage,
  staticsFiles,
  loremIpsumGenerator,
  hb1,
  hb2,
  hb3,
  hb4,
  hb5,
};
