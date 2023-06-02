import { Prof, PoweredByNodejs } from './helpersTypes';

export function listaProfs(profs: Prof[]) {
  const listaProfs = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
  return `<ul>${listaProfs.join('')}</ul>`;
}

export function listaTecnologies(tecs: PoweredByNodejs[]) {
  const listaTec = tecs.map((t) => {
    if (t.poweredByNodejs) return `<li>${t.name} - ${t.type}</li>`;
  });

  return `<ul>${listaTec.join('')}</ul>`;
}
