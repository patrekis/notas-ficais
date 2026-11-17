# Comunicação com o cliente

Neste projeto, trate toda resposta, mensagem, proposta, resumo, relatório ou explicação destinada ao cliente como texto pronto para envio.

Antes de entregar esse conteúdo ao usuário:

1. Redija a resposta com base apenas nas informações confirmadas no projeto.
2. Aplique a skill `humanizer:humanizer` em modo incorporado.
3. Entregue somente a versão final humanizada, sem rascunho, crítica, diagnóstico de estilo ou explicação sobre o Humanizer.

Use português brasileiro claro, natural e profissional. Vá direto ao que o cliente precisa saber e preserve datas, valores, links, nomes técnicos e ressalvas relevantes. Quando faltarem informações para uma afirmação, faça uma pergunta objetiva ou indique a pendência sem inventar dados.

Conteúdo interno, código, comandos, dados estruturados e citações técnicas permanecem no formato exigido pela tarefa. Se o usuário pedir um texto para copiar e enviar, não acrescente comentários antes ou depois da mensagem.
# Regras obrigatórias de skills do projeto

Estas regras fazem parte do contrato operacional deste repositório e devem ser seguidas em toda tarefa realizada nele:

1. Use as skills locais em `.agents/skills/` como fonte principal das instruções de processo.
2. Para trabalho criativo, planejamento, implementação, correção, revisão ou finalização, aplique o fluxo Superpowers adequado.
3. Todo texto destinado ao cliente deve passar pela skill local `humanizer` em modo incorporado antes da entrega. Preserve fatos, números, nomes, links e ressalvas confirmadas.
4. Mantenha o conhecimento do projeto centralizado com a skill local `graphify`. Ao iniciar ou alterar uma área relevante, atualize o grafo e seus artefatos quando o fluxo da skill estiver disponível.
5. Não substitua essas regras por uma abordagem ad hoc sem registrar a exceção e o motivo no artefato da tarefa.

Antes de cada tarefa, consulte `docs/SKILLS_DO_PROJETO.md` e seu inventário, decomponha o pedido, escolha as skills pertinentes e leia as instruções correspondentes. Use comandos apenas quando disponíveis e previstos pela skill; adapte a solicitação ao contexto.

Antes de implementar uma tarefa, apresente um plano com objetivo, partes do problema, skills e comandos aplicáveis, etapas, verificações, riscos e pendências. Aguarde a aprovação do usuário antes de implementar. Uma aprovação anterior cobre apenas o escopo apresentado; mudanças materiais exigem atualização do plano. Consultas, investigações e alterações necessárias para preparar o próprio plano podem avançar. O pedido do usuário para criar este manual e registrar esta regra já autoriza essas alterações.

# Postura técnica e continuidade

Atue como parceiro técnico responsável: avalie criticamente pedidos, premissas e soluções do usuário ou do cliente. Quando houver erro, risco, inviabilidade ou opção mais adequada, explique o motivo com evidências e proponha alternativas proporcionais. Não apresente hipóteses como fatos, não prometa viabilidade sem validação e respeite a decisão informada do usuário e as instruções aplicáveis.

Ao receber informações ou concluir trabalho relevante, atualize os documentos existentes de contexto, decisões, pendências e roteiro, preservando histórico e distinguindo fatos confirmados de propostas. Evite duplicação e indique data e fonte. Atualize também o grafo e seus artefatos pelo fluxo disponível do graphify; se a atualização semântica não puder ser executada, registre a limitação e a pendência sem afirmar que foi concluída.
