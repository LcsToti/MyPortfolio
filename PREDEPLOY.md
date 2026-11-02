# Revisão pré-deploy — 02/11/2026

O frontend passou nas verificações locais. A publicação fica condicionada à
validação do container Linux e da integração com o Nginx Proxy Manager na VM.
Instruções e comandos em [DEPLOY.md](DEPLOY.md).

| Área | Resultado |
| --- | --- |
| Dependências | `npm audit` executado; 12 alertas moderados corrigidos com autorização. `pnpm audit` final: zero alertas. |
| Instalação | pnpm 11.5.0 fixado e instalação com `--frozen-lockfile` aprovada. Removido o lockfile concorrente do npm. |
| Código | Lint, TypeScript estrito e build de produção aprovados. |
| Testes | Não existe suíte de testes; nenhuma suíte ou dependência de testes foi adicionada ao projeto. |
| Credenciais | Busca por padrões de chaves, senhas, tokens e credenciais em 158 arquivos iniciais e 269 blobs do histórico de 89 commits. Nenhuma credencial ativa identificada. |
| Histórico | Dois JWTs de links temporários de imagens do GitHub, expirados em abril de 2025. Sem reescrita do histórico. Nenhum `.env` ou arquivo de chave encontrado no histórico de nomes. |
| Ambiente | Nenhum `.env` atual nem uso de `VITE_*`. `.env.example` contém apenas o nome da rede do Compose. |
| Navegador | Chromium 156, desktop e mobile emulado; PT/EN e oito larguras entre 320 e 1440 px. Sem rolagem horizontal. |
| Interações | 66 verificações aprovadas: navegação, teclado, toque, menu, Escape, foco dos modais, certificados, zoom, Skills, preferências e movimento reduzido. |
| Vídeos | Os cinco vídeos carregaram e reproduziram após clique real. Antes do clique, todos estavam pausados em zero. Iframes removidos ao fechar ou trocar para certificado. |
| Console e recursos | Sem erros de execução do aplicativo ou erros HTTP nas interações. Os 101 arquivos do build responderam 200 no Nginx local. |
| Acessibilidade | axe-core 4.14.0 sem violações detectadas nos estados analisados, incluindo PT/EN e modais. Corrigido nome acessível de localização aplicado a parágrafo. |
| SEO | Título, descrição, idioma, favicon e textos alternativos conferidos. Adicionados canonical, Open Graph, Twitter Card, imagem social, robots e sitemap. |
| Servidor estático | Nginx local: sintaxe, gzip, cache e cabeçalhos de segurança aprovados. `.env` e `.git` bloqueados; código-fonte, dependências e assets inexistentes retornam 404. |
| Compatibilidade Linux | Imports locais e caminhos de imagens conferidos com distinção entre maiúsculas e minúsculas. Build sem source maps públicos. |
| Docker Compose | Configuração validada com `docker compose config --quiet`. Execução do container pendente. |

## Correções aplicadas

- Override de `minimatch` para a linha corrigida; o lockfile pnpm resolveu
  **11.0.3**. O alerta [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)
  afetava a cadeia de ferramentas de lint. Compatibilidade verificada executando
  o lint completo após a instalação.
- Treze fotos, capas e ícones convertidos para WebP e dimensões adequadas:
  **12,73 MB → 678 KB**, redução de **94,7%** nesses arquivos. Preservados os seis
  projetos, seus materiais e as prévias PNG dos certificados.
- Retrato principal antecipado por preload. Dimensões tipadas e `decoding` nas
  fotos; lazy loading das imagens secundárias e do modal preservado.
- Metadados sociais sincronizados com PT/EN; metadados estáticos usam português
  para crawlers que não executam JavaScript. Canonical e sitemap usam o domínio
  informado no projeto, `https://lucastoti.com/`.
- Artefatos locais excluídos do lint. O código-fonte continua sendo analisado.
- Dockerfile com build separado, pnpm e Nginx sem privilégios; Compose para a
  rede existente do Nginx Proxy Manager. Adicionados gzip, cache e cabeçalhos,
  incluindo CSP compatível com os players. Nenhuma publicação foi realizada.

## Performance medida

- JavaScript inicial: aproximadamente **164 KB gzip**; o conteúdo do modal tem
  cerca de **2,6 KB gzip** e é carregado sob demanda. CSS: aproximadamente **9 KB gzip**.
- Simulação mobile em 390×844, cache vazio, latência de 150 ms, download de
  1,6 Mbps e CPU reduzida em 4×: **LCP de 1,98 s** e **CLS de 0,00058**.
- No mesmo cenário, antes de antecipar o retrato e ajustar a compressão, o LCP
  estava em 3,73 s. Estes números são medições sintéticas locais; não representam
  tráfego real, Cloudflare ou desempenho em aparelho físico.

## Atenção antes de publicar

- Executar o build Docker, `nginx -t` no container e conferir o healthcheck.
  O Docker Engine local estava desligado. O Nginx foi testado em Windows,
  com caminhos e porta adaptados, sem comprovar o ambiente Linux da imagem.
- Ajustar `PROXY_NETWORK`, configurar o destino `http://lucas-portfolio:8080`
  no Nginx Proxy Manager e validar certificado/HTTPS. Conferir Cloudflare
  [Full (strict)](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/)
  e evitar cache de HTML que sobreponha a revalidação configurada.
- LinkedIn confirmado como correto pelo usuário em 02/11/2026; a consulta
  automática recebeu HTTP 999. GitHub, EF SET e os cinco vídeos responderam corretamente.
- Levar à VM a versão completa dos commits do projeto, incluindo os arquivos
  de configuração e os materiais de `public/`.
- A busca por segredos foi por padrões e cobriu o histórico alcançável por refs,
  não uma garantia de ausência de qualquer informação sensível. Os PDFs e
  certificados fornecidos continuam públicos como os demais arquivos de `public/`.
- O axe deixou o contraste sobre canvas e texturas para inspeção manual;
  a leitura foi conferida nas capturas, sem certificação completa de WCAG,
  leitor de tela ou teste em dispositivo físico.

Relatórios técnicos, capturas e cópias dos arquivos originais otimizados estão
em `audit.local/predeploy/`, ignorado pelo Git e excluído do contexto Docker.
