FROM nginx:alpine
#COPY UI/build/html/ /usr/share/nginx/html/
#COPY UI/default.conf /etc/nginx/conf.d/default.conf
#COPY UI/tls.crt /etc/ssl/tls.crt
#COPY UI/tls.key /etc/ssl/tls.key
#COPY UI/settings.js /usr/share/nginx/html/assets/jsFolder/settings.js

COPY build/html/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf
COPY tls.crt /etc/ssl/tls.crt
COPY tls.key /etc/ssl/tls.key
COPY settings.js /usr/share/nginx/html/assets/jsFolder/settings.js
EXPOSE 80
RUN ls -la /usr/share/nginx/html/
