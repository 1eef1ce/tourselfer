FROM nginx:alpine

ARG NGINX_HOST

RUN apk update \
    && apk add --no-progress \
            bash certbot openssl  \
    && rm /var/cache/apk/* \
    && echo "preparing certbot webroot" \
    && mkdir -p /var/lib/certbot \
    && echo "generating initial self-signed certificate" \
    && mkdir -p /etc/nginx/ssl/$NGINX_HOST/ \
    && openssl req -x509 -nodes -newkey rsa:4096 \
           -keyout /etc/nginx/ssl/$NGINX_HOST/privkey.pem \
           -out /etc/nginx/ssl/$NGINX_HOST/fullchain.pem \
           -subj "/C=/ST=/L=/O=/CN=$NGINX_HOST" \
    && ln -sf /etc/nginx/ssl/$NGINX_HOST /etc/nginx/ssl/latest

RUN apk add --no-cache gettext

RUN mkdir /etc/nginx/templates

COPY ./docker/nginx/conf.d/templates/default.conf.template /etc/nginx/templates

COPY ./docker/nginx/conf.d/htpasswd /etc/nginx/conf.d