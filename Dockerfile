FROM node:24-alpine AS build
WORKDIR /app
RUN npm install --global pnpm@11.5.0
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY tsconfig*.json vite.config.ts index.html ./
COPY src ./src
COPY public ./public
RUN pnpm build

FROM nginx:stable-alpine
COPY deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY THIRD_PARTY_NOTICES.md /usr/share/nginx/html/THIRD_PARTY_NOTICES.txt
USER nginx
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
