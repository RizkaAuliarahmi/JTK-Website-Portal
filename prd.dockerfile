# build stage
FROM node:15-alpine as build-stage

ENV NODE_ENV production

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prd

# run stage
FROM nginx:1.21.6-alpine as run-stage

RUN mkdir -p /var/log/nginx

RUN mkdir -p /var/www/html

COPY nginx_config/nginx.conf /etc/nginx/nginx.conf

COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /var/www/html

RUN chown nginx:nginx /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

