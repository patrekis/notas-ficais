# Pesquisa oficial: automação da NFS-e Nacional

Pesquisa realizada em 27/10/2026. Este documento reúne evidências de documentação pública; não houve autenticação, teste com certificado nem emissão fiscal. O PDF do cliente foi identificado pelo agente principal como roteiro do Emissor Nacional para ME/EPP do Simples Nacional.

## Conclusão técnica

Existe integração oficial para **empresas emitirem NFS-e por software próprio**. Portanto, o projeto não precisa necessariamente reproduzir cliques no site. A página oficial distingue integração das empresas e transferência de documentos dos municípios para o Ambiente de Dados Nacional. [API de integração](https://www.gov.br/nfse/pt-br/municipios/produtos-disponiveis/api-de-integracao).

A recomendação de privilegiar API em vez de automação visual é uma conclusão de engenharia: reduz dependência do HTML e permite tratar respostas, validações e consultas de maneira estruturada. Sua viabilidade para o cliente depende do cadastro, certificado, dados fiscais e validação em homologação.

## Recursos efetivamente documentados

O Manual de Contribuintes do Emissor Público descreve recepção de DPS XML por `POST /nfse`, geração síncrona da NFS-e ou retorno de rejeição, consulta pela chave e consulta pelo identificador da DPS. Também documenta eventos, inclusive cancelamento e substituição, sujeitos a regras próprias. A consulta da chave a partir da DPS verifica se o certificado da conexão corresponde a um ator da nota. Essa consulta permite desenhar reconciliação depois de falha de comunicação, evitando simplesmente repetir uma emissão incerta. [Manual de Contribuintes — Emissor Público, seções 1.3–1.5](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/manual-contribuintes-emissor-publico-api-sistema-nacional-nfs-e-v1-2-out2025.pdf).

**Não confundir** a API de emissão da SEFIN Nacional com APIs do ADN para distribuição/consulta ou APIs exclusivas da administração municipal. Há manuais distintos para cada público. A lista de documentação vigente inclui leiautes, regras e XSD que precisam ser selecionados pela versão aplicável à implementação. [Documentação Atual](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/documentacao-atual).

## Ambientes

O portal publica separadamente URLs de **Produção Restrita (homologação/testes)** e Produção para SEFIN Nacional, ADN, contribuintes, DANFSE e parâmetros municipais. Deve-se usar essa relação atualizada em vez de copiar endpoints antigos de tutoriais. Não foi testado acesso a nenhum endpoint autenticado. [APIs — Produção Restrita e Produção](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/apis-prod-restrita-e-producao).

## Identidade, autorização e limites

- O guia do emissor documenta login/senha próprios do portal, certificado digital e gov.br, com regras de perfil e habilitação. Alguns trechos do guia ainda descrevem gov.br inicialmente destinado ao MEI; isso exige verificar o comportamento atual para a ME/EPP específica, sem assumir que todo acesso ao portal é gov.br. O mesmo guia mostra HCaptcha na consulta pública por DPS; isso não prova que todo login ou emissão tenha CAPTCHA. [Guia do Emissor Público Nacional Web, seções 1.1, 9 e 10](https://www.gov.br/nfse/pt-br/biblioteca/documentacao-tecnica/documentacao-atual/guia-emissorpubliconacionalweb_snnfse-ern-v12.pdf).
- A documentação oficial de Londrina explica autenticação da API pelo raiz do CNPJ e distingue cadastro, autorização para emitir e método de acesso. É evidência operacional de um município, não promessa de que qualquer certificado de terceiro funciona para qualquer cliente. [Nota Técnica municipal 2025.001, seções 2.2–2.3](https://repositorio.londrina.pr.gov.br/index.php/menu-fazenda/ggf/nfse-nacional/71715-nt-2025-001-implantacao-da-nfse-padrao-nacional/file).
- A ICP-Brasil distingue certificados A1 em software e A3 em dispositivo criptográfico. Escolher o modo de assinatura e guarda do certificado é parte do desenho técnico; não basta o cliente dizer que possui login no site. A aceitação e os requisitos da aplicação devem ser conferidos na integração. [ITI — Certificação Digital](https://www.gov.br/iti/pt-br/acesso-a-informacao/perguntas-frequentes/certificacao-digital).
- **Procuração não é autorização universal**: a procuração eletrônica gov.br vale para o serviço específico que implementou essa funcionalidade. A API de procurações gov.br exige integração e está restrita a serviços públicos federais. Sua existência não concede a um software privado acesso automático a emitir NFS-e com certificado de terceiro; verificar a representação aceita pelo emissor. [Roteiro técnico oficial — API de Procuração](https://acesso.gov.br/roteiro-tecnico/procuracaoeletronica.html).
- Quando houver gov.br com duas etapas, o código é gerado no aplicativo do titular; outros autenticadores não o substituem. É uma dependência de interação autorizada no fluxo web, não algo a desativar para viabilizar o robô. [Segurança da conta](https://www.gov.br/governodigitallogin/pt-br/identidade/conta-gov-br/seguranca-da-conta).
- O governo orienta que a senha gov.br nunca seja compartilhada. Priorizar mecanismos próprios de integração e representação, em vez de solicitar ao cliente que entregue a senha pessoal. [Cuidados com sua conta gov.br](https://www.gov.br/gestao/pt-br/assuntos/editoria-defeso-eleitoral/cuidados-que-voce-precisa-ter-com-sua-conta-gov.br).

Não foi localizada nesta pesquisa uma regra oficial universal declarando toda automação de navegador proibida, nem uma permissão irrestrita. Avaliar os termos e as condições do portal real antes de prometer RPA sem supervisão. CAPTCHA, MFA e indisponibilidade devem conduzir a pausa/intervenção ou ao canal oficial de integração; não se promete contorná-los.

## Marco temporal decisivo para este cliente

A Receita Federal informa que ME/EPP optantes pelo Simples Nacional sujeitas à NFS-e deverão usar o Emissor Nacional a partir de **01/11/2026**, por web ou API, conforme CGSN 191/2026. A mesma notícia esclarece que disposições relativas a IBS/CBS para esses optantes passam a produzir efeitos em **01/01/2027**. Logo, o procedimento do PDF até dezembro/2026 pode corresponder ao período, mas não deve ser transformado em regra permanente. A obrigação do cliente específico e eventuais particularidades precisam de validação contábil. [Receita Federal, 14/08/2026](https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/agosto/simples-nacional-nfs-e-nacional-sera-obrigatoria-para-me-e-epp-a-partir-de-1o-de-novembro-de-2026).

Separadamente, o portal da NFS-e afirma que ausência de campos IBS/CBS até 31/12/2026 não causa rejeição técnica, mas pode representar desconformidade fiscal para categorias já obrigadas. **Ser aceito pelo sistema não comprova correção tributária.** [CGNFS-e — prazos de IBS/CBS](https://www.gov.br/nfse/pt-br/noticias/cgnfs-e-orienta-sobre-os-prazos-para%20destaque-de-ibs-cbs-nas-notas-fiscais-de-servico).

## Pontos ainda não demonstrados

1. Certificado aceito, poderes de representação e habilitação do CNPJ real.
2. Regras fiscais da atividade, município de emissão e de incidência, retenções e alíquotas. O município de prestação exibido no exemplo não resolve esses pontos.
3. Leiaute técnico vigente no início da implementação e mudanças para 2027.
4. Origem e qualidade dos dados, volume, frequência e número de empresas.
5. Limites de uso, timeouts, disponibilidade e comportamento de recuperação na homologação.
6. Quem autoriza cada emissão, cancelamento e substituição; quem mantém parâmetros fiscais.

Esta pesquisa trata de NFS-e (serviços); não deve ser aplicada automaticamente à NF-e de mercadorias ou à NFC-e, que têm projetos e integrações distintos.
