# Skills do projeto

## Fluxo obrigatório e consulta

Antes de cada tarefa, identifique o objetivo, as restrições e as partes do problema. Consulte este manual e o [inventário completo](INVENTARIO_SKILLS.md), escolha as skills pertinentes e leia suas instruções. Priorize as skills locais do projeto quando houver equivalentes. Nomes iguais podem apontar para versões diferentes; confira o caminho.

Antes de implementar, apresente um plano com etapas, skills, comandos disponíveis, entregas, verificações, riscos e pendências. Aguarde a aprovação do usuário antes de implementar; atualize o plano quando o escopo mudar materialmente. Consultas e preparação do plano podem avançar. Adapte o pedido ao contexto e siga as instruções da skill. Um nome não garante que exista um comando `/nome`; use comandos somente quando estiverem documentados e disponíveis.

| Situação | Skills a considerar |
|---|---|
| Requisitos ou soluções ainda abertos | `brainstorming` |
| Planejar e executar implementação | `writing-plans`, `executing-plans` após aprovação |
| Funcionalidade ou correção | `test-driven-development`, `verification-before-completion` |
| Falha ou comportamento inesperado | `systematic-debugging`, `diagnosing-bugs` |
| Revisão de alterações | `receiving-code-review`, `requesting-code-review`, `code-review` |
| Conhecer o projeto | `graphify`, `domain-modeling`, `codebase-design` |
| Pesquisa com fontes | `research`, `deep-research` conforme necessidade |
| Texto para cliente | `humanizer:humanizer`, modo incorporado |
| Interface ou demonstração | `frontend-design`, `prototype`, `browser-qa` conforme necessidade |
| Instruções para agentes ou skills | `writing-for-agents`, `writing-skills` quando aplicável |
| Instalação | `skill-installer` |

Delegação depende das ferramentas e instruções da sessão. A escolha de uma skill não autoriza ações externas fora do pedido. O inventário é um retrato do ambiente, com descrições originais e caminhos; a disponibilidade pode mudar. Para atualizá-lo, execute `python scripts/inventariar_skills.py` na raiz do projeto. O script lê metadados locais sem executar as skills. Atualizações semânticas de documentos no Graphify dependem de fluxo disponível; registre pendências com precisão.

As seções seguintes descrevem as coleções locais identificadas no levantamento inicial. O inventário completo inclui também skills globais e de plugins; consulte o caminho de cada entrada para verificar sua origem e seu escopo.

## Regras de uso

- **Superpowers:** organiza o processo de trabalho. Use brainstorming antes de trabalho criativo, planos antes de implementações com requisitos, TDD para features e correções, debugging sistemático para falhas, revisão e verificação antes de concluir.
- **Humanizer:** revise textos destinados ao cliente para remover padrões artificiais, sem alterar fatos ou acrescentar informações.
- **Graphify:** centralize o entendimento do repositório em um grafo de conhecimento, com artefatos navegáveis, JSON e relatório de auditoria conforme o fluxo da skill.

## Skills instaladas

### Superpowers (`obra/superpowers`)

Coleção instalada em `.agents/skills/`:

`brainstorming`, `diagnosing-superpowers`, `dispatching-parallel-agents`, `executing-plans`, `finishing-a-development-branch`, `receiving-code-review`, `requesting-code-review`, `subagent-driven-development`, `systematic-debugging`, `test-driven-development`, `using-git-worktrees`, `using-superpowers`, `verification-before-completion`, `writing-plans` e `writing-skills`.

O conjunto cobre descoberta de requisitos, planejamento, execução, isolamento de trabalho, delegação, testes, debugging, revisão, finalização e criação de novas skills. As instruções completas permanecem nos respectivos `SKILL.md`.

### Humanizer (`blader/humanizer`)

Instalada em `.agents/skills/humanizer/SKILL.md`. A skill orienta a remover sinais de texto gerado por IA, como contrastes artificiais, conclusões repetitivas, tríades forçadas, linguagem inflada, formatação decorativa e resíduos de chatbot, mantendo o conteúdo confirmado.

### Graphify (`Graphify-Labs/graphify`)

Instalada em `.agents/skills/graphify/skill.md`. A skill transforma arquivos do projeto em um grafo navegável, com comunidades, HTML interativo, JSON para GraphRAG e `GRAPH_REPORT.md`, além de prever atualizações incrementais e consultas ao grafo.

## Origem e verificação

No levantamento inicial, foram verificadas as coleções locais do projeto. As skills globais e de plugins listadas no inventário ficam fora desse escopo. O inventário é gerado a partir de metadados, não representa auditoria de todas as instruções nem comprova que cada comando esteja disponível.

## Limite de imutabilidade

O `AGENTS.md` define regras obrigatórias para o agente, mas não é tecnicamente imutável contra alguém que tenha permissão de editar o repositório. Para impor imutabilidade operacional, mantenha estes arquivos versionados e use proteção de branch, revisão obrigatória ou permissões de arquivo no ambiente de hospedagem.
