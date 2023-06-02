import { Request, Response } from 'express-serve-static-core';

const publicPath = `${process.cwd()}/public`;

const home = (req: Request, res: Response) => {
  res.send(
    `
        <h1>Bem-vindo :)</h1>
        <h2>Aplicação Express utilizando TypeScript</h2>    
    `,
  );
};

const welcome = (req: Request, res: Response) => {
  res.send(req.params.nome);
};

const staticsFiles = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
};

const hb1 = (req: Request, res: Response) => {
  res.render('hb1', {
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

  res.render('hb2', {
    profs,
  });
};

const hb3 = (req: Request, res: Response) => {
  res.render('hb3', {
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

  res.render('hb4', {
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

  res.render('hb5', {
    technologies,
  });
};

export default { welcome, home, staticsFiles, hb1, hb2, hb3, hb4, hb5 };
