FROM ruby:3.3 AS erb-builder
WORKDIR /app
COPY . .
RUN bundle install
RUN bundle exec rake

FROM node:20 AS percel-builder
WORKDIR /app
COPY --from=erb-builder /app /app
RUN npm ci
RUN npm run build

FROM caddy:2.8.4-alpine
WORKDIR /var/www/html
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=percel-builder /app/dist /var/www/html
EXPOSE 8001
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
