FROM node:lts-slim AS artefacts
WORKDIR /website
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && \
  pnpm install --frozen-lockfile && \ 
  pnpm audit --audit-level high 
COPY . .
RUN pnpm lint && \
  pnpm test && \
  pnpm build

FROM nginx:alpine-slim
COPY --from=artefacts /website/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/mime.types /etc/nginx/mime.types
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
