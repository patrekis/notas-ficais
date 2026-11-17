# Contexto e roteiro do projeto

**Manual de skills:** o usuário determinou que toda tarefa consulte o [manual](SKILLS_DO_PROJETO.md) e que implementações tenham plano apresentado e aprovado antes da execução. O inventário foi gerado dos arquivos locais; a atualização semântica no Graphify permanece pendente, por falta de backend configurado.

Atualizado em 13/11/2026. Fontes: respostas de Dantas Junior de 27/10/2026 e respostas adicionais compartilhadas pelo usuário em 13/11/2026, sem data da conversa informada; PDF do projeto; [mapeamento inicial](mapeamento-automacao-nfse.md) e [pesquisa oficial anterior](fontes-oficiais-nfse.md). Este é um roteiro inicial, sujeito à validação fiscal e técnica; não é uma especificação aprovada nem um compromisso de prazo.

Pesquisa posterior, verificações e perguntas detalhadas: [pesquisa e próximos passos](pesquisa-e-proximos-passos-2026-11-11.md). Existe também uma [demonstração local](../demonstracao/index.html) com dados fictícios; não emite nem salva nota.

O [histórico de conversas com o cliente](historico-conversas-cliente.md) reúne as perguntas, as respostas originais e as pendências por assunto. Consulte-o antes de preparar novas perguntas e registre as próximas interações nele.

**Correção de 13/11/2026:** o usuário informou que este projeto é para um cliente do Dantas e esclareceu expressamente que não estamos trabalhando para a Dantas Trip. A identidade da empresa emitente do projeto precisa ser confirmada; a menção anterior à Dantas Trip não identifica a empresa atendida.

O usuário confirmou que as respostas sobre passagens aéreas, comissão e pagador dizem respeito ao cliente do Dantas. A identidade da emitente continua pendente.

## Objetivo e situação atual

Reduzir o trabalho de preparar e emitir documentos fiscais relacionados a passagens, com dados recebidos por mensagem e arquivamento do resultado. O cliente nunca usou o portal apresentado e nunca emitiu nota fiscal para passagem. Há um PDF com um exemplo de NFS-e Nacional, um mapeamento e uma pesquisa técnica; não há aplicação ou integração construída neste diretório. Não houve acesso à conta, teste de certificado ou emissão fiscal.

## O que o cliente informou

| Tema | Resposta e efeito no levantamento |
|---|---|
| Operação | Vende passagens aéreas de uma ou mais companhias. A nota pretendida se refere a uma taxa de comissão pelo serviço. |
| Emitente | Ainda não identificada para este projeto. O usuário esclareceu que não estamos trabalhando para a Dantas Trip; não atribuir a ela a emissão deste projeto. |
| Entrada | Recebe dados por mensagem e pode lançá-los em planilha. A planilha é uma entrada possível, não uma integração automática com mensagens. |
| Tomadores | Geralmente pessoas físicas, possivelmente pessoas jurídicas. O cliente informou que deve constar quem pagou pela passagem; validar o tratamento fiscal com o contador. |
| Acesso | Tem certificado digital; tipo, titular, validade e compatibilidade ainda não foram informados. Nunca usou o portal. |
| Frequência | Quase diária, às vezes mais de uma por dia, com dias sem emissão. Volume mensal e pico não foram informados. |
| Dados variáveis | Informou nome, CPF, data de nascimento e preço. Serviço e impostos seriam os mesmos; isso é relato do cliente e precisa de validação fiscal. Para pessoa jurídica, os dados ainda não foram definidos. |
| Conferência | Gostaria de conferir as primeiras, depois ganhar prática. Não autorizou uma regra ou momento para emissão automática. |
| Resultado | Quer apenas salvar a nota; envio a terceiros não foi solicitado. Formatos e local de armazenamento ainda não foram definidos. |

Data de nascimento foi mencionada pelo cliente; sua necessidade para o documento ou para a operação ainda não foi demonstrada. Coletar e guardar somente se houver finalidade e necessidade confirmadas. O pagador pode ser diferente do passageiro; definir como tratar esses casos após confirmação do contador.

## Questão fiscal anterior à escolha da integração

O cliente do Dantas vende passagens aéreas de companhias e pretende emitir nota referente à taxa de comissão. A identidade da empresa emitente permanece pendente. A NFS-e para o serviço é um caminho a validar; não há confirmação contábil do documento, do valor tributável ou do tomador. A [orientação da Prefeitura de Campinas](https://portal-adm.campinas.sp.gov.br/node/51805) trata de outro município e não resolve o caso. O contador deve confirmar documento, enquadramento, tomador, valor e demais parâmetros antes da emissão. O PDF é um exemplo de preenchimento, não comprovação dessas respostas.

## Caminho recomendado, sujeito a validação

1. **Definir a operação com o contador:** identificar emitente, atividade, documento, valores e parâmetros fiscais, inclusive as regras aplicáveis à competência e as mudanças previstas para 2027. Não fixar impostos ou alíquota do exemplo do PDF.
2. **Mapear um caso real anonimizado:** registrar operação, tomador, passageiro quando diferente, valor, competência, descrição e referência que permita detectar repetição. Definir quais campos são efetivamente necessários.
3. **Validar acesso e canal:** se NFS-e Nacional for confirmada, verificar cadastro, certificado e representação; estudar a API oficial de emissão e testar em produção restrita. O acesso ao portal não comprova acesso à API. Se a API não atender, avaliar preenchimento assistido no navegador e suas condições de uso, ou provedor contratado.
4. **Preparar a primeira versão:** entrada simples por planilha ou formulário, validação, perfil fiscal aprovado e com vigência, prévia e aprovação humana, registro de cada operação. A escolha definitiva entre planilha e formulário depende de exemplos e do uso real.
5. **Testar o ciclo completo:** rejeições, repetição, resposta incerta e consulta antes de nova tentativa; confirmar quais arquivos oficiais serão obtidos e onde serão guardados. Nenhuma retransmissão automática de resultado incerto sem reconciliação.
6. **Piloto supervisionado:** somente após validações técnica e fiscal, emitir casos reais com aprovação expressa e conferir os documentos. Avaliar redução da conferência depois do piloto, com critérios combinados; não presumir autorização para emissão autônoma.

Não há base para definir cronograma, orçamento ou promessa de emissão automática agora. Cancelamento, substituição, envio e múltiplos emitentes estão fora do escopo inicial proposto até serem levantados e decididos.

## Perguntas prioritárias para uma próxima conversa

1. O contador pode confirmar o documento fiscal e canal aplicáveis, o código do serviço, o tomador, a comissão a informar, os impostos e dados obrigatórios?
2. Qual é a empresa emitente do cliente do Dantas, seu município e CNPJ? Será sempre a única emitente? O certificado pertence a quem, é arquivo A1 ou dispositivo A3, e está válido? Não enviar senha ou certificado por mensagem.
3. Pode compartilhar um exemplo fictício ou anonimizado dos dados recebidos, incluindo pagador, passageiro se diferente, comissão, data do serviço e descrição?
4. Em que momento cada operação estará pronta para emissão? Como reconhecer duas solicitações da mesma venda e onde os arquivos deverão ser guardados?

Depois dessas respostas, detalhar o fluxo para pessoa jurídica, volume mensal e exceções, inclusive descontos, cancelamentos e competências anteriores. Validar a necessidade da data de nascimento com base na operação e no documento aplicável.

## Registro de decisões e pendências

- **11/11/2026 — direção proposta:** começar com conferência humana e estudar API oficial somente se a NFS-e Nacional for aplicável. Ainda não houve teste nem aprovação de arquitetura.
- **11/11/2026 — documentação:** as respostas de 27/10 foram incorporadas sem tratar quantidade de tomadores como quantidade de emitentes.
- **11/11/2026 — graphify:** a atualização semântica ficou pendente: não foi identificado backend de extração configurado no ambiente. A consulta ao grafo existente não retornou nós para os termos pesquisados; não assumir que ele reflita estas alterações. A extração incremental de documentos deve ser retomada quando o fluxo semântico estiver disponível, preservando o grafo existente.
- **11/11/2026 — avanço exploratório:** pesquisa oficial atualizada, perguntas em etapas e demonstração local fictícia documentadas em [pesquisa e próximos passos](pesquisa-e-proximos-passos-2026-11-11.md). O teste sem credenciais da SEFIN retornou HTTP 403; a demonstração não se conecta ao serviço.
- **13/11/2026 — histórico:** perguntas e respostas de 27/10/2026 registradas separadamente, com pendências e distinção entre perguntas sugeridas e comprovadamente enviadas. A atualização semântica do Graphify permanece pendente, conforme registro anterior.
- **13/11/2026 — sequência recomendada:** preparar em paralelo um fluxo demonstrativo de entrada e conferência com dados fictícios e confirmar com cliente e contador a operação e o documento fiscal. Após essas respostas, validar certificado e acesso e escolher o canal; só então integrar e testar emissão. As perguntas sugeridas continuam sem confirmação de envio. A consulta ao grafo nesta data não encontrou nós para os termos pesquisados; a atualização semântica segue pendente.
- **13/11/2026 — preparação exploratória:** a demonstração agora importa um modelo CSV fictício, apresenta a conferência e identifica dados ausentes, tipos ou valores inválidos e referências repetidas no mesmo arquivo. O [guia da demonstração](../demonstracao/LEIA-ME.md) descreve uso, verificações e limites. Não há persistência, validação fiscal ou emissão. Foram executados testes automatizados e de navegador. Como o usuário autorizou explicitamente avançar nessa exploração enquanto busca respostas, o trabalho foi tratado como protótipo exploratório; o desenho final e a integração dependem dessas respostas. A atualização semântica do Graphify permanece pendente por falta de backend de extração configurado.
- **13/11/2026 — novas respostas:** Dantas Trip Ltda., Rio de Janeiro-RJ, venda de passagens aéreas de companhias, taxa de comissão e pagador como cliente pretendido. Cliente tem contador, mas orientação fiscal e exclusividade da emitente ainda não foram confirmadas. Respostas e perguntas registradas no histórico; não foram identificadas data e hora da conversa. Graphify segue com atualização semântica pendente.
- **13/11/2026 — correção do usuário:** projeto destinado a um cliente do Dantas; não confundir com Dantas Trip. Identidade da empresa atendida e vínculo com as respostas anteriores pendentes de esclarecimento. Preservado o histórico original. Graphify permanece pendente de atualização semântica.
- **13/11/2026 — esclarecimento:** usuário confirmou que passagens aéreas, comissão e pagador se referem ao cliente do Dantas; identidade da empresa emitente segue pendente. Graphify permanece pendente de atualização semântica.
- **13/11/2026 — correção reforçada:** o usuário esclareceu expressamente que não estamos trabalhando para a Dantas Trip. Não associar essa empresa ao cliente atendido ou presumir que emitirá suas notas. A identificação da empresa emitente permanece pendente. Graphify segue pendente de atualização semântica.
