FROM nginx:alpine
COPY www/ /etc/nginx/html
EXPOSE 80