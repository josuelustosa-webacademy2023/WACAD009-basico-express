import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

import { Tipo } from './loggerTypes';

function loggerUser(tipo: Tipo) {
  const logPath = `${process.cwd()}/logs/logs.txt`;

  return (req: Request, res: Response, next: NextFunction) => {
    if (tipo === 'simples') {
      const data = `${new Date().toISOString()} ${req.method} ${req.url}`;

      fs.writeFile(`${logPath}`, data, (err) => {
        if (err) throw err;
        else console.log('Log simples salvo com succeso!!!');
      });
    } else if (tipo === 'completo') {
      const dataFull = `${new Date().toISOString()} ${req.method} ${
        req.httpVersion
      }, ${req.get('User-Agent')}`;

      fs.writeFile(`${logPath}`, dataFull, (err) => {
        if (err) throw err;
        else console.log('Log completo salvo com succeso!!!');
      });
    } else {
      console.log('Não foi possível salvar os logs!');
    }
    next();
  };
}

export default loggerUser;
