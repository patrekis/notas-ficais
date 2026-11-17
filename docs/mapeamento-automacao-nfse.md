# Mapeamento inicial — robô de emissão de NFS-e

Análise em 27/10/2026. Material: as seis páginas de `Orientações para emissão de NF - Simples Nacional Padrão Geral.pdf`, incluindo imagens das telas. Pesquisa complementar em fontes oficiais. Este documento é um levantamento de viabilidade; não houve acesso à conta do cliente nem emissão de documento fiscal.

**Atualização em 11/11/2026:** as respostas do cliente e as prioridades atuais estão em [roteiro e contexto](roteiro-e-contexto.md). Elas complementam este levantamento inicial e prevalecem sobre hipóteses e perguntas antigas quando houver conflito. O enquadramento fiscal da operação com passagens, inclusive a escolha do documento, continua pendente de validação.

## 1. O que o cliente parece estar pedindo

A interpretação mais provável é um sistema que receba dados de serviços prestados e emita as notas correspondentes com menos trabalho manual. O PDF descreve a execução manual de uma NFS-e pelo Emissor Nacional, na modalidade de emissão completa, para um perfil de empresa do Simples Nacional. Não é um roteiro de NF-e de mercadorias.

O material mostra **como preencher o portal**, mas não explica **de onde sairão as informações**, **quando emitir**, **quem autoriza** ou **como tratar exceções**. Essas são as principais lacunas para definir o projeto.

Conclusão inicial: há um caminho técnico oficial para automação. A viabilidade para o cliente ainda depende de confirmar seu cadastro, município, autenticação, perfil fiscal e dados de entrada. Não é necessário presumir que o produto final será um robô que imita cliques.

## 2. Fluxo observado no PDF

| Página | O que aparece | Implicação para o sistema |
|---|---|---|
| 1 | Portal Contribuinte do Emissor Nacional; acesso por certificado ou gov.br; menu de emissão completa | Confirmar identidade do emitente e acesso autorizado. A tela também mostra usuário/senha, embora o roteiro destaque outras opções. |
| 2 | Competência; opção IBS/CBS; emitente como prestador; regime do Simples ME/EPP | Cadastro fiscal do emitente precisa ser validado e ter vigência. Competência deve vir da operação, com validação. |
| 3 | Compra governamental; tomador Brasil/exterior, CPF/CNPJ e contatos; destinatário; intermediário | Cada operação pode abrir campos e exigências diferentes. O roteiro não detalha todas as alternativas. |
| 4 | País e município da prestação; código de tributação nacional; NBS e indicador da operação aparecem na tela; descrição e informações complementares | Precisamos do enquadramento do serviço aprovado pelo contador. Rio de Janeiro/RJ é exemplo visual, não prova do município de cadastro do cliente. |
| 5 | Valor; descontos; tributação municipal; suspensão, retenção de ISS e benefício | As respostas não podem ser copiadas indiscriminadamente para outros serviços ou empresas. |
| 6 | Dedução/redução; campos de tributos federais; valor aproximado dos tributos; alíquota do Simples; conferência e emissão | Deve existir uma prévia e um tratamento explícito de situações fora do perfil padrão. A tela mostra 6%, que não é alíquota universal. |

O PDF não mostra o documento emitido, seu armazenamento, envio ao tomador, recuperação de falhas, cancelamento ou substituição. Esses passos precisam entrar no levantamento funcional.

## 3. Orientações do PDF que precisam de contexto

- **“Competência do mês vigente”:** orientação operacional daquele roteiro. Não substituir automaticamente a competência informada sem confirmar o período efetivo e as regras aplicáveis.
- **Sem intermediário, imunidade ou descontos:** descreve o caso apresentado; operações diferentes precisam de outro tratamento.
- **Tomador no exterior:** há a opção na tela, mas não há instrução completa para exportação ou incidência. Deixar fora do piloto.
- **6% na tela:** exemplo do preenchimento de valor aproximado dos tributos. Não confundir com uma regra fixa de ISS ou com alíquota aplicável a todo optante do Simples.
- **IBS/CBS até dezembro/2026:** o roteiro tem validade temporal. A configuração deve ser revisada com o contador antes da virada de 2027; não fixar essa escolha permanentemente no código.

A Receita Federal anunciou obrigatoriedade do Emissor Nacional para ME/EPP optantes do Simples a partir de **01/11/2026**, com emissão por web ou API. Isso é relevante porque estamos em 27/10/2026, próximos da mudança. A notícia não comprova que a conta específica do cliente já esteja operacional. [Receita Federal](https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/agosto/simples-nacional-nfs-e-nacional-sera-obrigatoria-para-me-e-epp-a-partir-de-1o-de-novembro-de-2026).

## 4. Caminhos disponíveis

As comparações abaixo são avaliação de engenharia, não orçamento nem garantia de prazo.

| Caminho | Como funcionaria | Vantagens | Condições e limites |
|---|---|---|---|
| **API oficial — primeira opção a validar** | Sistema prepara os dados e transmite ao serviço oficial | Não depende da posição de botões; permite fila, consulta de resultado e integração com sistemas | Exige implementar o leiaute, autenticação/assinatura aplicáveis e regras fiscais. Validar habilitação do cliente. |
| **Automação assistida no navegador** | Pessoa autentica; programa preenche; pessoa confere e autoriza | Permite experimentar o fluxo visual e atender cenários com intervenção humana | Depende da interface, sessão e eventuais desafios de acesso; verificar condições de uso. |
| **Robô autônomo no navegador** | Programa tenta acessar e emitir sem acompanhamento | Pode reproduzir tarefas repetidas | Maior fragilidade operacional; não prometer funcionamento contínuo antes de testar login, restrições e recuperação de falhas. |
| **Provedor fiscal/ERP com integração** | Nosso sistema envia dados a uma solução contratada | Pode reduzir trabalho de manter integrações | Avaliar cobertura, contrato, custos, gestão de certificados, dados e suporte. Nenhum fornecedor foi selecionado ou testado nesta análise. |
| **Preparação e conferência apenas** | Sistema organiza planilha, valida dados e gera prévia para emissão manual | Entrega intermediária possível enquanto o acesso é resolvido | Reduz digitação e erros, mas não conclui sozinho a emissão. |

O manual oficial documenta emissão pela SEFIN Nacional a partir de DPS, uma Declaração de Prestação de Serviços em XML. É diferente da API do ADN destinada à distribuição de documentos e das interfaces municipais. A existência de uma API de consulta não prova que ela emita notas. [Manual de contribuintes do Emissor Público Nacional](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/manual-contribuintes-emissor-publico-api-sistema-nacional-nfs-e-v1-2-out2025.pdf).

Há endereços oficiais separados para **produção restrita, destinada a testes**, e produção. Os endereços e leiautes precisam ser conferidos novamente ao implementar. [Ambientes oficiais](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/apis-prod-restrita-e-producao), [documentação técnica atual](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/documentacao-atual).

## 5. Até onde podemos chegar

### Primeiro produto viável proposto

Um emitente, um perfil de serviço e operações nacionais simples, conforme enquadramento validado pelo contador:

1. Receber uma planilha ou formulário com dados da operação.
2. Validar preenchimento, formatos, valores e possíveis repetições.
3. Aplicar um perfil fiscal aprovado, com controle de vigência.
4. Mostrar prévia para conferência.
5. Solicitar aprovação antes da emissão.
6. Transmitir pela API, se o acesso for validado.
7. Registrar resultado oficial, identificador e XML; disponibilizar documento auxiliar por mecanismo oficial validado.
8. Encaminhar rejeições e resultados incertos para uma fila de acompanhamento.

A planilha é uma proposta de entrada inicial; o PDF não informa se o cliente já usa planilha, ERP ou outra origem.

### Evoluções possíveis

Integração com ERP/financeiro, importação em lote com aprovação, emissão recorrente com critérios expressos, painel de acompanhamento, múltiplos emitentes com isolamento de dados, distribuição de documentos e conciliação. Cancelamento e substituição exigem levantamento e autorização próprios.

### O que não dá para prometer agora

- Emissão para qualquer empresa, município, serviço ou regime tributário.
- Emissão totalmente autônoma usando apenas uma senha gov.br.
- Disponibilidade permanente do portal/API ou ausência de rejeições.
- Decisões fiscais corretas quando faltam dados ou enquadramento contábil.
- Cancelamento sempre disponível ou capaz de desfazer qualquer erro.
- Prazo e preço fechados sem conhecer quantidade de emitentes, volume, integrações e exceções.

## 6. Limites de acesso, segurança e responsabilidade

**Automação oficial existe.** Ser um serviço governamental não inviabiliza por si só a integração. A barreira principal é operar pela interface adequada, com credenciais válidas, poderes suficientes e dados corretos.

**Acesso ao portal não equivale a acesso à API.** É necessário conferir certificado, titularidade, representação admitida e requisitos do serviço escolhido. Não presumir que uma procuração aceita no e-CAC ou um login do contador habilitem emissão pela API em nome de qualquer cliente.

**Se houver CAPTCHA, MFA ou bloqueio, o fluxo deve parar para intervenção ou seguir por uma integração autorizada.** Não foi observado CAPTCHA em execução nesta análise; não acessamos a conta. Não propor contorno de controles nem desativação de segurança para viabilizar o robô. O gov.br documenta código gerado no aplicativo quando a verificação em duas etapas está ativa e orienta a não compartilhar credenciais. [Verificação em duas etapas](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-na-conta-gov.br/ativar-a-verificacao-em-duas-etapas/ativar-a-verificacao-em-duas-etapas/), [segurança das credenciais](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-nos-dados-cadastrais/nao-alterei-meus-dados-cadastrais/identifiquei-uma-alteracao-ou-um-acesso-suspeito).

**O contador valida o perfil fiscal; o sistema executa regras aprovadas.** Sugestões por IA, se houver, ficam sujeitas à revisão. Não são necessárias para automatizar o fluxo e não devem decidir autonomamente enquadramento ou tributos.

**Dados e certificados precisam de proteção.** Proposta: definir responsabilidades contratuais, finalidade, acessos e retenção; guardar segredos em armazenamento protegido; separar emitentes; evitar senhas e chaves em planilhas, código ou logs; registrar quem aprovou cada emissão. A divisão concreta entre controlador e operador depende de como o serviço será contratado e executado. [Guia da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-para-definicoes-dos-agentes-de-tratamento-de-dados-pessoais-e-do-encarregado).

**Não há conclusão jurídica sobre permissão irrestrita de robôs no portal.** As condições de uso e restrições técnicas do canal escolhido ainda precisam ser verificadas. Preferir a API oficial reduz dependência da interface visual, mas não elimina obrigações nem controles de acesso.

## 7. Riscos operacionais e resposta proposta

| Risco | Resposta no desenho da solução |
|---|---|
| A transmissão é aceita, mas a conexão cai antes da resposta | Marcar resultado como incerto e consultar antes de retransmitir. Não criar outra nota automaticamente. |
| Planilha contém o mesmo serviço duas vezes | Identificador interno por operação, controle de envio e comparação de registros. |
| Perfil fiscal ou vigência incorretos | Aprovação contábil e versionamento por competência. |
| Certificado expira ou acesso é revogado | Monitorar validade e interromper a fila com aviso. |
| Serviço oficial indisponível ou limitando chamadas | Fila, tentativas espaçadas e tratamento de indisponibilidade; não insistência indefinida. |
| Interface ou leiaute muda | Monitoramento de documentação e manutenção da integração. |
| Nota emitida com erro | Procedimento humano de avaliação de cancelamento/substituição conforme regras aplicáveis. |
| Operação fora do perfil validado | Encaminhar para análise em vez de preencher respostas padrão. |

O manual prevê consulta por identificador de DPS, útil para investigar o resultado de um envio. A prevenção de duplicidade de operações também exige controles próprios: não é suficiente confiar somente no identificador fiscal. [Manual de contribuintes](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/manual-contribuintes-emissor-publico-api-sistema-nacional-nfs-e-v1-2-out2025.pdf).

## 8. Informações para a próxima conversa com o cliente

1. É uma empresa ou um escritório atendendo vários CNPJs? Quais municípios de cadastro e regimes?
2. A emissão já ocorre nesse portal? Quem emite hoje e quais dificuldades encontra?
3. Quais serviços e códigos são utilizados? Há exemplos de notas aprovadas, com dados pessoais reduzidos ao necessário?
4. Quantas notas por mês e qual o pico por dia? São recorrentes ou avulsas?
5. De onde vêm tomador, valor, competência e descrição? Qual identificador permite evitar repetição?
6. Qual evento autoriza emitir: serviço concluído, pagamento, contrato ou aprovação manual?
7. Existe certificado digital? Qual tipo, titularidade e forma de uso autorizada? Quem será responsável por sua guarda?
8. Há retenções, exterior, intermediários, descontos, benefícios ou competências anteriores?
9. Quem aprova as regras fiscais e quem confere a prévia? A aprovação será por nota ou lote?
10. Precisa apenas emitir ou também consultar, armazenar, enviar, cancelar e substituir?

Para esta conversa inicial, basta saber se certificado e acesso existem; não é necessário enviar senhas ou arquivos de certificado pelo chat.

## 9. Trabalho dividido em partes menores

| Etapa | Entrega concreta | Critério para avançar |
|---|---|---|
| 1. Entender a operação | Dados de entrada, volume, emitentes e exceções documentados | Cliente e contador confirmam o cenário padrão. |
| 2. Validar acesso oficial | Evidência de cadastro, canal, autenticação e ambiente de testes compatíveis | Acesso autorizado funciona para o cenário escolhido. |
| 3. Preparar sem emitir | Importação, validações, prévia e perfil fiscal versionado | Exemplos conferidos pelo responsável fiscal. |
| 4. Provar em homologação | Fluxo integrado, rejeições e recuperação de resultado incerto testados | Resultado comparado com o esperado e sem duplicações nos testes. |
| 5. Piloto controlado | Emissão real com aprovação expressa e acompanhamento | Documentos e registros conferidos pelo responsável. |
| 6. Ampliar | Lotes, recorrência e novas integrações | Estabilidade e controles demonstrados no piloto. |

Não foi construída automação nesta etapa. A recomendação é validar primeiro a API para o perfil do cliente e reservar automação assistida de navegador como alternativa, caso a integração não atenda ao cenário.

## 10. Mensagem sugerida ao cliente

“Analisamos o passo a passo e identificamos um caminho para automatizar a emissão de notas de serviço. Além do preenchimento pelo site, existe uma integração oficial que vamos avaliar para o seu caso. A proposta inicial é receber os dados, validar, apresentar para conferência e emitir após aprovação, mantendo o registro do resultado. Para definir escopo, prazo e custo, precisamos confirmar as empresas atendidas, os serviços, a origem dos dados, o volume e o acesso autorizado. As configurações tributárias serão validadas com o contador. Podemos começar com um cenário simples e ampliar depois dos testes.”
