# Plano de implementação: preparação assistida de solicitações

**Estado:** proposto para aprovação; não iniciar implementação antes da resposta do usuário.

**Objetivo:** ampliar a demonstração existente para simular a preparação e a conferência de solicitações de venda de passagens aéreas com dados fictícios, enquanto aguardamos o cliente e o contador.

**Contexto confirmado:** operação com passagens aéreas de companhias, comissão pelo serviço, cliente pretendido é quem pagou, dados recebidos por mensagem, possibilidade de planilha e conferência das primeiras operações. A empresa emitente deste projeto não está identificada; não confundir este cliente com outra empresa.

**Abordagem:** manter HTML e JavaScript locais, sem dependências adicionais, aproveitando a demonstração e a importação CSV. O resultado continuará sendo um protótipo com dados fictícios e estado apenas em memória. Isso permite aprender com o fluxo sem antecipar requisitos fiscais ou tratamento de dados reais. Alternativas consideradas: manter a demonstração atual (mais simples, mas não permite testar o ciclo de conferência) e construir já um sistema persistente de emissão (depende das definições de acesso, fiscais e de armazenamento ainda não recebidas).

## Entregas e tarefas

1. **Modelo de dados de demonstração.** Alterar `demonstracao/modelo-exemplo.csv`, `demonstracao/importacao.js` e `demonstracao/importacao.test.cjs` para usar nomes que distingam pagador e valor de comissão. Manter pessoa física/jurídica, referência e descrição. Não tratar campos experimentais como exigências fiscais. A conversão do CSV atual será documentada, incluindo mudança de cabeçalho.
   - Testar importação de exemplos PF e PJ, comissão com vírgula e ponto, rejeição de valores inválidos, cabeçalho incorreto e referências repetidas no mesmo arquivo.
2. **Conferência individual.** Alterar `demonstracao/index.html` e, se necessário, criar um módulo JavaScript em `demonstracao/` para selecionar uma solicitação importada, visualizar seus dados e marcá-la como conferida ou devolver para revisão. Estados são apenas demonstrativos e permanecem em memória; nenhuma ação representa aprovação fiscal ou envio.
   - Testar que o estado é individual, que linha com pendência não passa à conferida e que uma recarga limpa os dados. Não presumir que mensagens representem uma operação única.
3. **Fluxo de erros e casos de exemplo.** Apresentar razões de rejeição da planilha e das linhas, incluindo referência duplicada no mesmo arquivo; exemplos PF e PJ fictícios e caso de pagador diferente do passageiro apenas como cenário explicativo, sem coletar dado de passageiro como obrigatório.
   - Testar CSV com aspas, dados vazios, referência repetida, texto longo e conteúdo interpretável como HTML. Verificar que o conteúdo aparece como texto e que não há quebra em tela pequena.
4. **Guia e conhecimento.** Atualizar `demonstracao/LEIA-ME.md` e `docs/roteiro-e-contexto.md` com instruções, limites, decisões e pendências. Atualizar o Graphify pelo fluxo disponível; se extração semântica não estiver disponível, registrar a pendência e preservar o grafo anterior.
   - Conferir que o guia descreve formato CSV, ausência de persistência, inexistência de emissão e limites da verificação de duplicidade.

## Skills e comandos previstos

- `executing-plans`: conduzir as etapas após aprovação.
- `test-driven-development`: escrever e executar testes de comportamento antes das mudanças.
- `browser-qa`: verificar importação, conferência, recarga e tela de celular no navegador disponível.
- `verification-before-completion`: conferir resultados antes de declarar conclusão.
- `graphify`: consultar e atualizar o conhecimento quando o fluxo correspondente estiver disponível.
- `humanizer:humanizer`: revisar textos destinados ao cliente, preservando os fatos.
- Comando de testes existente: `node --test demonstracao/importacao.test.cjs`. Os testes adicionais de interface usarão Playwright se o ambiente disponível permitir; qualquer limitação será registrada.

## Limites e dependências

Não coletar dados pessoais reais no protótipo; não implementar autenticação, armazenamento persistente, cálculo de tributos, emissão, envio ao governo ou integração fiscal nesta etapa. A validação de referência duplicada restringe-se ao arquivo em uso e não garante ausência de duplicidade operacional.

Antes de implementar uma emissão real: identificar emitente e município; receber orientação do contador sobre documento, tomador, comissão, classificação, tributos e campos; confirmar certificado e autorização; testar o canal e o ambiente adequados. As condições concretas e os critérios de liberação serão definidos após essas respostas.
