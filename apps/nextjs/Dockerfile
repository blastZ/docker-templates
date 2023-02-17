# node v18.13.0, npm v8.19.3
FROM node:lts-alpine@sha256:fda98168118e5a8f4269efca4101ee51dd5c75c0fe56d8eb6fad80455c2f5827 AS base

WORKDIR /app

ENV APP_ENV production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm config set registry=https://registry.npmmirror.com \
  && npm install -g pm2

FROM base AS init

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./

RUN npm ci

FROM base AS build

COPY --from=init /app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM base AS production

RUN addgroup --system --gid 1001 nextjs
RUN adduser --system -G nextjs --uid 1001 nextjs

COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nextjs /app/.next/static ./.next/static

COPY ecosystem.config.js ./

USER nextjs

EXPOSE 3000

CMD pm2-runtime --raw ecosystem.config.js --env ${APP_ENV}