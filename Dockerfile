# 1. Lightweight Nginx 서버를 베이스로 사용합니다.
FROM nginx:alpine

# 2. 현재 폴더의 모든 파일(index.html, style.css, script.js)을 Nginx의 웹 루트 폴더로 복사합니다.
COPY . /usr/share/nginx/html

# 3. Cloud Run은 기본적으로 8080 포트를 사용하므로 Nginx 설정을 변경하거나 포트를 노출합니다.
# Nginx의 기본 포트인 80을 8080으로 바꾸는 설정을 추가합니다.
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

# 4. 8080 포트를 개방합니다.
EXPOSE 8080

# 5. Nginx를 실행합니다.
CMD ["nginx", "-g", "daemon off;"]
