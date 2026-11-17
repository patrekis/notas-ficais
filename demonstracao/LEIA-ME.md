# Demonstração de preparação de solicitações

Abra `index.html` no navegador. A tela é um experimento para discutir o fluxo com o cliente. Use somente os dados fictícios fornecidos: não emite, não autentica, não consulta serviços externos e não salva dados; atualizar a página limpa a prévia e a lista.

Para testar a planilha, selecione `modelo-exemplo.csv` no campo de arquivo. Ele pode ser editado em planilha e exportado como CSV UTF-8 com ponto e vírgula como separador. Arquivos Excel `.xlsx` não são importados diretamente. Preserve o cabeçalho `referencia;tipo;nome;descricao;valor`, nessa ordem. O tipo é `PF` ou `PJ`; informe valor positivo com até duas casas decimais, usando vírgula ou ponto. O modelo representa hipóteses de interface, não uma lista validada de campos fiscais.

A demonstração apresenta informações da linha, indica dados ausentes, tipo e valor inválidos e sinaliza referências repetidas dentro do arquivo importado. Não detecta repetição entre arquivos, não valida CPF, não calcula tributos e não confirma que uma operação está fiscalmente pronta. Uma linha sem avisos ainda precisa de conferência e validação fiscal.

Para repetir os testes locais, execute `node --test demonstracao/importacao.test.cjs` na raiz do projeto. A interação também foi verificada no navegador Edge com Playwright em 13/11/2026, incluindo importação do exemplo, referências repetidas, renderização segura de texto, largura de celular e limpeza após atualizar.
