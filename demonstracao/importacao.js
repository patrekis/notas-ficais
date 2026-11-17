(function (root) {
  function lerCSV(texto) {
    const linhas = []; let linha = []; let campo = ''; let aspas = false; let fechado = false;
    texto = texto.replace(/^\uFEFF/, '');
    for (let i = 0; i < texto.length; i++) {
      const c = texto[i];
      if (aspas) {
        if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++; }
        else if (c === '"') { aspas = false; fechado = true; }
        else campo += c;
      } else if (c === '"' && campo === '' && !fechado) aspas = true;
      else if (c === ';') { linha.push(campo); campo = ''; fechado = false; }
      else if (c === '\r' || c === '\n') {
        if (c === '\r' && texto[i + 1] === '\n') i++;
        linha.push(campo); linhas.push(linha); linha = []; campo = ''; fechado = false;
      } else {
        if (fechado || c === '"') throw new Error('Aspas inválidas no arquivo.');
        campo += c;
      }
    }
    if (aspas) throw new Error('Há aspas não fechadas no arquivo.');
    if (linha.length || campo || fechado) { linha.push(campo); linhas.push(linha); }
    return linhas.filter(l => l.some(c => c.trim()));
  }
  function importar(texto) {
    let dados;
    try { dados = lerCSV(texto); } catch (e) { return { erro: e.message, linhas: [] }; }
    const cabecalho = ['referencia', 'tipo', 'nome', 'descricao', 'valor'];
    if (!dados.length || dados[0].length !== cabecalho.length || !dados[0].every((c, i) => c.trim().toLowerCase() === cabecalho[i]))
      return { erro: 'Cabeçalho inválido. Use o modelo CSV fornecido.', linhas: [] };
    const linhas = dados.slice(1).map((campos, i) => {
      const [referencia = '', tipo = '', nome = '', descricao = '', valorBruto = ''] = campos.map(c => c.trim());
      const problemas = [];
      if (campos.length !== 5) problemas.push('Quantidade de colunas incorreta');
      if (!referencia) problemas.push('Referência ausente');
      if (!['PF', 'PJ'].includes(tipo.toUpperCase())) problemas.push('Tipo deve ser PF ou PJ');
      if (!nome) problemas.push('Nome ausente');
      if (!descricao) problemas.push('Descrição ausente');
      const valido = /^\d{1,9}(?:[,.]\d{1,2})?$/.test(valorBruto);
      const valor = valido ? Math.round(Number(valorBruto.replace(',', '.')) * 100) : 0;
      if (!valido || valor <= 0) problemas.push('Valor inválido');
      return { numero: i + 2, referencia, tipo: tipo.toUpperCase(), nome, descricao, valor, problemas };
    });
    const contagem = new Map();
    linhas.forEach(l => { const k = l.referencia.toLocaleLowerCase('pt-BR'); if (k) contagem.set(k, (contagem.get(k) || 0) + 1); });
    linhas.forEach(l => { if (l.referencia && contagem.get(l.referencia.toLocaleLowerCase('pt-BR')) > 1) l.problemas.push('Referência repetida no arquivo'); });
    return { erro: null, linhas };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { importar };
  else root.importarSolicitacoes = importar;
})(globalThis);
