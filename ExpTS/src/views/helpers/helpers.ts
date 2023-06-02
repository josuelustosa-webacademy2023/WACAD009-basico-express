import { Prof, PoweredByNodejs } from './helpersTypes';

export function listaProfs(profs: Prof[]) {
  const listaProfs = profs.map((p) => `<li>${p.nome}-${p.sala}</li>`);
  return `<ul>${listaProfs.join('')}</ul>`;
}

export function listaTecnologies(tecs: PoweredByNodejs[]) {
  const listaTec = tecs.map((t) => `<li>${t.name}-${t.type}</li>`);
  console.log(listaTec)

  return `<ul>${listaTec.join('')}</ul>`;
}
