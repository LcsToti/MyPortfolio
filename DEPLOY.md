# Publicação na Oracle VM

Site estático, com build em Node 24 e pnpm 11.5.0. O container final executa
somente Nginx, sem Node, dependências de desenvolvimento ou variáveis do frontend.
O domínio configurado nos metadados é `https://lucastoti.com/`.

## Verificação local

```sh
pnpm install --frozen-lockfile
pnpm audit
pnpm lint
pnpm build
pnpm preview
```

`build` inclui o typecheck do TypeScript. Não há suíte de testes no projeto.
O único lockfile mantido é `pnpm-lock.yaml`. O override de `minimatch` corrige
[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)
na cadeia de ferramentas de lint.

## Docker Compose e Nginx Proxy Manager

1. Identifique a rede Docker do Nginx Proxy Manager:

   ```sh
   docker inspect NOME_DO_CONTAINER_NPM --format '{{json .NetworkSettings.Networks}}'
   ```

2. Copie `.env.example` para `.env` e ajuste `PROXY_NETWORK` para essa rede
   existente. O Nginx Proxy Manager precisa estar nela também.

3. Valide a configuração, compile e inicie:

   ```sh
   docker compose config --quiet
   docker compose build --pull
   docker compose run --rm --no-deps portfolio -t
   docker compose up -d
   docker compose ps
   docker compose logs --tail=50 portfolio
   ```

4. No Nginx Proxy Manager, configure o Proxy Host de `lucastoti.com` para
   **http**, hostname **lucas-portfolio**, porta **8080**. Configure certificado
   válido para o domínio e Force SSL. A aplicação não precisa de WebSocket.
   O Compose não publica portas na VM; o acesso ocorre pela rede compartilhada.
   [Referência de redes externas do Compose](https://docs.docker.com/compose/how-tos/networking/).

5. Com o proxy da Cloudflare habilitado, use SSL/TLS **Full (strict)** e
   certificado válido no Nginx Proxy Manager. Não sobreponha os cabeçalhos do
   container com políticas incompatíveis no proxy. O YouTube precisa continuar
   recebendo o Referer para funcionar.
   [Referência da Cloudflare](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/).

6. Após publicar, confira `https://lucastoti.com/`, `/robots.txt`, `/sitemap.xml`,
   `/images/social-preview.jpg`, os seis modais e o play manual dos cinco vídeos.

## Cache e segurança

O HTML exige revalidação; arquivos com hash em `/assets/` recebem cache de um ano;
demais arquivos públicos recebem uma hora. Evite regras da Cloudflare que
sobrescrevam esse comportamento e mantenham HTML antigo após uma publicação.

O Nginx comprime texto e envia CSP, `nosniff`, proteção contra incorporação por
outros sites e política de Referer. A CSP permite o player do YouTube no modal e
estilos inline usados pelo React/Motion. Os cabeçalhos ficam no mesmo nível para
preservar a [herança do Nginx](https://nginx.org/en/docs/http/ngx_http_headers_module.html).

O container usa usuário sem privilégios, filesystem somente leitura, `/tmp`
temporário, healthcheck e rotação de logs. O contexto Docker inclui apenas os
arquivos necessários à compilação, com exclusão de `.env`, Git e artefatos locais.

Não há variáveis `VITE_*` necessárias. Tudo que for colocado em `public/` ou
embutido no JavaScript será público, incluindo certificados e seus PDFs.

As imagens-base usam tags mantidas `node:24-alpine` e `nginx:stable-alpine`;
`--pull` atualiza suas correções. Para reproduzir a imagem inteira byte a byte,
registre os digests após validar a primeira imagem no ambiente de publicação.

## Limite da revisão local

O build do frontend foi executado e validado no Chromium. A configuração passou
no `nginx -t` do Nginx 1.30.6 para Windows, com caminhos e porta adaptados; gzip,
cache, cabeçalhos e os cinco players foram conferidos nesse servidor local.
O Docker Engine local estava desligado: o build da imagem, `nginx -t` dentro do
container, healthcheck e integração com o proxy precisam ser confirmados com
os comandos acima antes de publicar. Nenhuma
configuração da VM, Cloudflare ou Nginx Proxy Manager foi alterada nesta revisão.
