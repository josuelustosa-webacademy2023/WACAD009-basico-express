import { Request, Response } from 'express-serve-static-core';

const publicPath = `${process.cwd()}/public`;

const home = (req: Request, res: Response) => {
  res.send(
    `
        <h1>Bem-vindo :)</h1>
        <h2>Aplicação Express utilizando TypeScript</h2>
        <p>Acesse as páginas da aplicação:</p>

        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/welcome/Josué">Bem-vindo (nome)</a></li>
          <li><a href="/statics-files-page">Arquivos estáticos</a></li>
          <li><a href="/lorem-ipsum-generator">Gerador de Lorem Ipsum</a></li>
          <li><a href="/hb1">Handlebars #1</a></li>
          <li><a href="/hb2">Handlebars #2</a></li>
          <li><a href="/hb3">Handlebars #3</a></li>
          <li><a href="/hb4">Handlebars #4</a></li>
          <li><a href="/hb5">Handlebars #5</a></li>
        </ul>
    `,
  );
};

const welcome = (req: Request, res: Response) => {
  res.send(req.params.nome);
};

const staticsFiles = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
};

const loremIpsumGenerator = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/lorem-ipsum.html`);
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
  home,
  staticsFiles,
  loremIpsumGenerator,
  hb1,
  hb2,
  hb3,
  hb4,
  hb5,
};
