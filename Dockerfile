FROM nginx:stable-alpine
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY www /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
