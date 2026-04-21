# Lightweight Alpine NGINX serving static files for Google Cloud Run
FROM nginx:alpine

# Copy the static web application to standard HTML directory
COPY . /usr/share/nginx/html

# Expose port (Cloud Run requires 8080 by default, although we configure nginx)
EXPOSE 8080

# Configure nginx to listen on 8080 instead of internal 80
RUN sed -i 's/listen  *80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
