# Pesquisa e próximos passos — 11/11/2026

Objetivo: avançar sem depender de respostas imediatas do cliente. Pesquisa em fontes oficiais, acompanhada de uma demonstração local e verificações sem dados pessoais nem emissão. As conclusões fiscais para o caso concreto dependem do contador.

Atualização em 13/11/2026: a demonstração passou a importar e revisar um modelo CSV fictício. Veja o [guia e os limites](../demonstracao/LEIA-ME.md). O restante deste documento preserva os resultados da pesquisa de 11/11/2026.

Atualização posterior em 13/11/2026: o cliente informou venda de passagens aéreas de companhias, Dantas Trip Ltda. no Rio de Janeiro-RJ como emitente, taxa de comissão como valor pretendido e pagador como cliente da nota. Ele tem contador; o enquadramento continua a confirmar. As perguntas e cenários abaixo são históricos; veja o [roteiro atualizado](roteiro-e-contexto.md) e o [histórico](historico-conversas-cliente.md) antes de repeti-los.

**Correção posterior em 13/11/2026:** o usuário esclareceu que o projeto é para um cliente do Dantas e que não deve ser confundido com Dantas Trip. A identidade da emitente e a aplicação das respostas anteriores ao cliente final precisam ser confirmadas; o parágrafo anterior fica preservado como registro da interpretação inicial.

**Esclarecimento:** o usuário confirmou que venda de passagens aéreas, comissão e pagador dizem respeito ao cliente do Dantas. A identidade da empresa emitente continua pendente.

**Correção reforçada:** o usuário esclareceu que este trabalho não é para a Dantas Trip. Não atribuir essa empresa ao projeto. A emitente do cliente atendido ainda não foi identificada.

## Cenários que ainda precisam ser diferenciados

| Possibilidade | O que mudaria | O que precisamos confirmar |
|---|---|---|
| Intermediação ou agenciamento de passagem | Pode haver serviço próprio da agência e documento referente ao transporte. Valor de passagem e remuneração do serviço não podem ser considerados equivalentes sem análise. | Quem presta cada serviço, quem contrata e o que é faturado. |
| Transporte prestado pelo próprio cliente | A natureza e o documento fiscal podem ser diferentes dos da intermediação; não presumir que o roteiro de NFS-e cubra o caso. | Modal, trajetos, prestador e documento exigido. |
| Outro serviço relacionado a viagem | O documento e os dados dependem do serviço efetivamente prestado. | Descrição real da operação e orientação contábil. |

A [Prefeitura de Campinas](https://portal-adm.campinas.sp.gov.br/node/51805) apresenta uma distinção para agências e transporte aéreo no contexto local. Não se conhece a localidade nem a atividade do cliente, portanto não se pode aplicar essa orientação automaticamente. O PDF existente descreve um possível preenchimento de NFS-e, não a classificação da operação.

## O que é possível preparar agora

- Mostrar a [demonstração local](../demonstracao/index.html), com dados fictícios: captura ilustrativa e prévia para conferência. Abrir o arquivo no navegador; não utilizar dados reais. Não há envio, emissão, integração, armazenamento ou documento fiscal. É um protótipo exploratório, não uma implementação fiscal.
- Elaborar os campos, estados e tratamento de erros sem fixar regras fiscais: solicitação recebida → dados em conferência → aprovada → transmissão → emitida/rejeitada/resultado incerto. Na incerteza, consultar antes de qualquer novo envio; rejeição e duplicidade exigem revisão.
- Preparar perguntas específicas e um exemplo fictício. Não solicitar senha ou arquivo de certificado por mensagem.
- A implementação de emissão, assinatura, XML fiscal, impostos e documentos auxiliares depende do caso fiscal, do cadastro, da documentação vigente e de testes autorizados. A demonstração não resolve essas partes.

## Evidências técnicas oficiais

1. A [página oficial do serviço](https://www.gov.br/pt-br/servicos/emitir-nota-fiscal-de-servico-eletronica), atualizada em 29/10/2026, informa credenciamento prévio no Painel do Contribuinte para emissão via API. A titularidade e a representação aceitas ainda precisam ser testadas no caso concreto.
2. A [documentação de produção](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/documentacao-atual) lista o XSD `v1.01-20260209`; a [documentação de testes](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/producao-restrita) lista `PRODREST-v1.01-20261020`. A versão deve ser escolhida por ambiente e data. Arquivos listados não provam que todas as regras estejam implantadas igualmente nos dois ambientes.
3. O [comunicado de 29/10/2026](https://www.gov.br/nfse/pt-br/noticias/nfs-e-nacional-confira-oas-rientacoes-sobre-leiaute-em-producao-regras-de-preenchimento-de-ibs-cbs-e-status-da-nota-tecnica-009) informa NT 004 com parcela da NT 007 em produção e implantação gradual da NT 009 em testes. O grupo IBS/CBS pode não provocar rejeição técnica quando omitido, inclusive em certos casos obrigatórios; isso não comprova conformidade fiscal. O cronograma publicado deve ser rechecado na implementação.
4. A [NT 008 de DANFSe](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/rtc/nt-008-se-cgnfse-danfse-20260505.pdf) prevê suspensão da API de geração do DANFSe em 01/07/2026 e descreve geração por software de emissão. O estado real, eventuais mudanças posteriores e a forma de obter o PDF devem ser verificados antes de prometer download automático. Guardar XML e representação são responsabilidades diferentes.
5. O [manual oficial do contribuinte](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/manual-contribuintes-emissor-publico-api-sistema-nacional-nfs-e.pdf) descreve recepção da DPS e retorno da nota ou rejeição; a existência dessa funcionalidade não garante autorização para o certificado do cliente.

## Verificações executadas

Em 11/11/2026, foram feitas duas requisições HTTP GET sem certificado, credenciais ou dados pessoais ao endereço de documentação da SEFIN em produção restrita e a uma rota de consulta com chave formada somente por zeros. Ambas retornaram **HTTP 403** neste ambiente. Não houve tentativa de emissão. O resultado não identifica a causa, não demonstra indisponibilidade geral e não confirma se um certificado autorizado conseguiria acessar a API. Endereços de ambientes constam da [lista oficial](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/apis-prod-restrita-e-producao/apis-prod-restrita-e-producao).

Teste no Microsoft Edge com Playwright: preenchimento e prévia para pessoa física e jurídica, formatação do valor, limpeza da prévia após atualização, ausência de erro de página e ajuste à largura de 390 pixels passaram. A primeira tentativa de executar o teste usou um navegador do Playwright não instalado; a execução posterior utilizou o Edge existente. A tela é uma simulação independente da API e não valida leiaute fiscal.

O grafo existente não foi atualizado semanticamente nesta etapa: não havia backend de extração configurado. O código de atualização disponível sem backend indexa código e não incorpora o conteúdo dos documentos; usá-lo isoladamente não resolveria a pendência. Preservar o grafo atual e refazer a extração semântica quando disponível.

## Perguntas para o cliente

Enviar em etapas para facilitar a resposta. As primeiras resolvem a escolha do documento e não repetem as respostas já dadas.

### Primeiro contato

1. A empresa vende passagens de uma companhia de transporte ou faz o transporte por conta própria? Qual tipo de passagem é vendido?
2. Qual empresa vai emitir o documento e em qual município ela está cadastrada? Será sempre a mesma empresa?
3. O valor que você pretende colocar na nota é o valor total pago pela passagem, uma taxa/comissão pelo seu serviço ou outro valor?
4. Quem deve constar como cliente da nota: a pessoa que viaja, quem pagou ou uma empresa? Pode mandar um exemplo fictício das informações que recebe por mensagem?
5. Você tem contador? Ele pode nos orientar sobre qual documento emitir e os dados necessários para essa operação?

### Quando o fluxo fiscal estiver claro

6. O certificado é um arquivo no computador ou fica em um token/cartão? Ele pertence à empresa emissora e está válido? Não envie o arquivo ou a senha.
7. Qual acontecimento indica que a nota já pode ser emitida? Como identificamos quando duas mensagens se referem à mesma venda?
8. O que deve aparecer na descrição? A data de nascimento é necessária para o serviço, para a nota ou para outra finalidade?
9. Para pessoa jurídica, quais dados do comprador e dos passageiros você recebe? Há casos em que uma compra cobre vários passageiros ou uma pessoa compra para outra?
10. Onde a nota deve ser salva e quais arquivos você precisa guardar? Quem terá acesso? O que acontece quando houver erro, cancelamento ou necessidade de substituição?

### Para o contador

Confirmar documento fiscal e canal para cada operação; prestador e tomador; município, competência, classificação e descrição; base de cálculo e valor a informar; tratamento de taxa, comissão e repasse; regime e parâmetros de tributos, retenções e sua vigência; necessidade de IBS/CBS por competência; dados obrigatórios; casos de cancelamento/substituição; e habilitação municipal e do emitente para o canal escolhido. Solicitar orientação escrita e exemplo anonimizado aprovado, se disponível.

## Critério para avançar para emissão

Com a operação e o enquadramento confirmados, obter acesso autorizado e credenciamento, escolher versões de leiaute de cada ambiente, implementar e testar o ciclo em produção restrita com certificado compatível e dados de teste autorizados. Só então considerar piloto real acompanhado e expressamente autorizado. Confirmar o armazenamento e uma forma de reconciliação antes de qualquer retentativa após perda de resposta.
