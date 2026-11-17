const { test } = require('node:test');
const assert = require('node:assert/strict');
const { importar } = require('./importacao.js');

test('importa dados e preserva ponto e vírgula entre aspas', () => {
  const r = importar('referencia;tipo;nome;descricao;valor\nA-1;PF;Maria Exemplo;"Serviço; exemplo";150,50\n');
  assert.equal(r.erro, null);
  assert.equal(r.linhas[0].descricao, 'Serviço; exemplo');
  assert.equal(r.linhas[0].valor, 15050);
  assert.deepEqual(r.linhas[0].problemas, []);
});
test('identifica referências repetidas e dados inválidos', () => {
  const r = importar('referencia;tipo;nome;descricao;valor\nA;PF;Teste;Exemplo;10,00\na;PJ;;Exemplo;-2\n');
  assert.match(r.linhas[0].problemas.join(' '), /repetida/i);
  assert.match(r.linhas[1].problemas.join(' '), /repetida/i);
  assert.match(r.linhas[1].problemas.join(' '), /nome/i);
  assert.match(r.linhas[1].problemas.join(' '), /valor/i);
});
test('rejeita cabeçalho inesperado e aspas não fechadas', () => {
  assert.ok(importar('outra;coluna\na;b').erro);
  assert.ok(importar('referencia;tipo;nome;descricao;valor\na;PF;"aberto').erro);
});
test('aceita BOM e CRLF e não inventa linhas vazias', () => {
  const r = importar('\ufeffreferencia;tipo;nome;descricao;valor\r\nA;PJ;Empresa;Exemplo;1,00\r\n');
  assert.equal(r.linhas.length, 1);
  assert.deepEqual(r.linhas[0].problemas, []);
});
