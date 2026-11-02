# Convenções do portfólio

## Arquitetura e escopo

- React + Vite + TypeScript em modo estrito; Tailwind CSS para tokens/utilitários, CSS para a composição aberta por seções, Motion e Lucide.
- Site estático. Não adicionar backend, CMS, autenticação, integrações ou dados pessoais não fornecidos.
- Aplicar DRY: uma árvore de componentes atende português e inglês. Não criar versões `English*`, cópias de páginas ou condicionais de idioma espalhadas pelo JSX.
- Extrair componentes/hooks quando houver comportamento compartilhado real. Não criar abstrações sem necessidade.
- É proibido manter arquivos com complexidade excessiva. Manter responsabilidades claras e dividir o conteúdo quando isso facilitar a leitura e a manutenção.
- Idealmente, cada arquivo deve ter por volta de 150 linhas. Essa é uma referência prática, não um limite obrigatório; priorizar clareza e coesão, sem fragmentar arquivos artificialmente apenas para atingir esse número.
- Direção visual atual: o usuário rejeitou o excesso de blocos Bento e forneceu seis capturas de referência. Usar composição aberta, nome e retrato amplos na apresentação, faixas de seção, miniaturas de projetos com texto solto, stack e trajetória em listas, sobre com foto lateral e contato escuro. Preservar a paleta azul/neutra.
- A grade se limita a conteúdo que pede comparação, como as seis miniaturas de projetos; não envolver cada seção em cartões. Manter os seis projetos, nomes, capas e ícones fornecidos pelo usuário. O Markdown complementa o conteúdo, sem substituir essa escolha por uma seleção menor. `Portrait` é compartilhado entre apresentação e sobre, usando a mesma foto e seus dados tipados. Capturas de referência não são fonte de fatos pessoais, métricas, experiência ou fotos de Lucas.
- Títulos diretos, sem rótulos numerados decorativos. Cards de projetos com dados reais abrem um modal compartilhado com `<dialog>`, acessível por teclado e toque, com fechamento por Escape e retorno de foco. Projetos sem detalhes reais exibem estado pendente, sem modal vazio.
- `DetailsModal` compartilha o mesmo `<dialog>` entre projetos e certificados, mantendo o foco de origem ao navegar entre esses conteúdos. `src/data/certificates.ts` centraliza os seis documentos fornecidos, suas prévias e metadados bilíngues. Certificados abrem na formação, em Idiomas e no início dos modais dos quatro projetos premiados. Mostrar a imagem no modal com ampliação, sem botões de abrir ou baixar PDF. Datas desconhecidas permanecem como período/semestre, sem inferir emissão a partir dos metadados do arquivo.
- Os cinco vídeos fornecidos ficam em `videoId` nos dados dos projetos e usam o player do YouTube dentro do modal. A reprodução começa somente após play manual, sem autoplay; remover o iframe ao fechar ou trocar de conteúdo para encerrar a reprodução. Projetos sem vídeo preservam a capa preenchendo a área do modal.
- Skills preserva `#tecnologias`: sete áreas, incluindo Desenvolvimento com IA, com recursos principais e evidências vinculadas aos projetos por ID. Detalhes acessíveis por teclado e toque. IA agrupa assistentes, ferramentas de coordenação e métodos de trabalho; TDD, Testcontainers, revisão e Git worktrees ficam em Arquitetura e testes. Idiomas é um bloco próprio ao final de Skills, sem ser uma categoria técnica. Não usar porcentagens ou níveis autodeclarados. Ícones conceituais usam Lucide; preservar marcas de tecnologias e projetos.
- A seção Como uso IA no desenvolvimento explica planejamento, implementação e revisão e exibe ferramentas com ícones em três grupos visíveis: Assistentes e agentes, Ferramentas conectadas e Especificações e contexto, sem depender de expandir Skills. `src/data/aiTools.ts` centraliza esses grupos e fornece os assistentes destacados em Skills. As ferramentas e práticas adicionais foram confirmadas pelo usuário em 02/11/2026; somente Codex, MCPs, automação e revisão humana têm vínculo confirmado com o Zenit. Não atribuir as demais ferramentas a projetos específicos nem inferir especialização ou métricas de produtividade. Usar marcas locais quando disponíveis, incluindo o logo fornecido em `public/images/orca-ide.png` para Orca IDE; shadcn/ui usa símbolo conceitual Lucide.
- Trajetória como desenvolvedor inclui somente experiências de desenvolvimento e formação, sem referências à experiência administrativa. O título fica acima de duas subseções com cabeçalhos próprios e divisória entre Experiência e Formação. Somente os períodos das experiências são sticky, limitados ao respectivo item. Formação permanece estática, com logo monocromático da PUC Minas maior; a apresentação mostra o mesmo logo discretamente e liga para `#formacao`.
- Não adicionar pontos finais coloridos ao nome, aos títulos ou às iniciais de Lucas; o usuário pediu sua remoção.
- Acabamento inspirado no AI Hero: DM Sans nos títulos, textos e controles; JetBrains Mono apenas em tecnologias e metadados. Fontes locais, botões com raio de 9px e divisórias discretas, preservando a composição aberta e a identidade azul/neutra.
- A escala de fontes usa tokens em `src/styles.css`: corpo em 17px, apoio em 15px e metadados em 14px na configuração padrão do navegador. Manter a leitura confortável também no celular. Ícones conceituais de títulos são neutros, acompanhando o texto; preservar as cores dos logos das tecnologias e instituições.
- Idiomas tem título acima do conteúdo, subordinado a Skills. Português e Inglês aparecem como itens equivalentes abaixo do título, com o certificado e o PNG colorido do EF SET dentro do bloco de Inglês. O certificado EF SET comprova C2 (72/100) em leitura e compreensão oral; não atribuir a ele avaliação de escrita ou conversação.

## Aparência clara e tokens semânticos

- O usuário pediu a remoção completa do tema escuro. O site usa somente a aparência clara, com `color-scheme: light`, independente da preferência do sistema operacional.
- Não há seletor, provider, persistência ou dependência de tema. Não reintroduzir suporte a temas sem novo pedido do usuário.
- Todas as cores de interface estão em `src/styles.css`, declaradas como tokens semânticos em `:root`.
- Usar nomes por função (`--background`, `--foreground`, `--surface`, `--muted`, `--border`, `--accent`, `--action-background`), nunca pela cor (`--blue`, `--indigo`). Botões usam tokens próprios para fundo e texto.
- `src/styles.css` reúne fontes, tokens e regras globais, expondo os tokens ao Tailwind com `@theme inline`. Estilos compartilhados e de cada seção ficam em `src/styles/`, com seus respectivos ajustes responsivos. `src/main.tsx` importa primeiro os estilos globais, depois os compartilhados e os de seção, preservando essa ordem.
- Não colocar hex/RGB em componentes ou nas regras de layout. Cores literais ficam nos tokens; assets estáticos isolados (favicon) e metadados são exceções. Ilustrações SVG da interface usam `currentColor` ou tokens.
- A paleta atual é neutra com azul padrão (`#2563EB`), conforme a preferência do usuário. Projetos, desenvolvimento com IA e contato usam grafite para destacar o conteúdo principal, como parte da composição, sem representar uma variante de tema. Não usar grades decorativas nos fundos. Trajetória usa textura diagonal e sobre usa bolinhas com uma mancha suave de cor; os padrões devem preservar a legibilidade. Alterações de paleta começam nos tokens de `:root` em `src/styles.css`.

## Idiomas: i18next + react-i18next

Escolha: `i18next` com `react-i18next` e `i18next-browser-languagedetector`. Referências: https://react.i18next.com/latest e https://www.i18next.com/overview/typescript.

- Inicialização única em `src/i18n/index.ts`, importada antes da renderização em `src/main.tsx`.
- Idiomas suportados: `pt` e `en`. Detecção: preferência salva em `portfolio.language`, depois navegador; fallback português. Variantes como `pt-BR` e `en-US` são normalizadas por `load: 'languageOnly'`.
- Catálogos locais em `src/i18n/locales/pt.ts` e `en.ts`, com conteúdo de Skills/IA em `src/i18n/skillsContent.ts` e rótulos de certificados em `src/i18n/certificatesContent.ts`; não usar backend de tradução, chamadas remotas nem cópias dos dados compartilhados.
- Sempre que o usuário pedir mudanças em títulos, descrições ou outros textos, atualizar português e inglês na mesma alteração, mesmo que o pedido seja escrito em apenas um idioma. Aplicar a mudança nos dois catálogos ou nos campos `pt` e `en` de `LocalizedText`, conforme a origem do conteúdo, mantendo o mesmo sentido nos dois idiomas.
- `pt.ts` define a estrutura; `en.ts` deve satisfazer `typeof pt`. `i18next.d.ts` tipa as chaves de `t()`. Ao adicionar texto, adicionar a mesma chave nos dois catálogos. Não usar casts para contornar erros de tradução.
- Textos editoriais, rótulos, mensagens, nomes acessíveis e metadados ficam nos catálogos. Usar interpolação para valores dinâmicos. Não usar `language === 'pt' ? 'texto' : 'text'` nos componentes.
- `usePortfolioContent()` centraliza o acesso ao conteúdo editorial e ao idioma normalizado. Rótulos isolados usam `useTranslation()`.
- Tipos e composição dos dados ficam em `src/data/portfolio.ts`; projetos em `src/data/projects.ts` e Skills em `src/data/skills.ts`. Campos descritivos reais usam `LocalizedText` (`{ pt, en }`), sem duplicar os objetos completos. Campos desconhecidos continuam `null` ou vazios.
- Nunca traduzir nomes próprios dos projetos nem alterar IDs/âncoras ao trocar idioma. Seleções e estado de navegação devem permanecer estáveis; usar IDs como chaves React.
- A inicialização sincroniza `document.documentElement.lang` (`pt-BR`/`en`), título e descrição quando o idioma muda. Não repetir essa sincronização em componentes.
- `PreferenceControls` é a única interface dos seletores; fica acessível em desktop e celular. Usar controles nativos com rótulos traduzidos.

## Verificação

- Executar somente as verificações pertinentes aos arquivos alterados, uma vez ao concluir o conjunto de mudanças, sem repetir a cada ajuste intermediário.
- Para alterações em JS/TS, componentes, traduções tipadas, dependências ou configurações de compilação, executar `npm run build`. Executar `npm run lint` quando houver alterações em JS/TS ou na configuração do ESLint.
- Para alterações apenas em CSS, executar `npm run build`; não executar lint sem alterações que ele analise. Para alterações apenas em documentação ou imagens, normalmente não executar nenhum dos dois, salvo impacto concreto na compilação ou no código.
- Não repetir verificações já aprovadas sem mudanças posteriores que afetem o que foi verificado. Em caso de falha, investigar a causa antes de tentar novamente; repetir somente a verificação afetada após uma correção pertinente.
- Manter os logs concisos, resumindo resultados aprovados e exibindo apenas os trechos necessários para investigar falhas.
- Por preferência explícita do usuário, não adicionar testes automatizados, ferramentas ou dependências de testes sem solicitação explícita.
- Respeitar movimento reduzido e os padrões de acessibilidade.
- Este AGENTS.md é a referência de arquitetura para futuras alterações.
