# Railway-optimierte Dockerfile für statische Website
# Kostenlose Version: Minimale Größe und schnelle Deployments

FROM node:22-alpine AS builder

WORKDIR /app

# Kopiere nur package.json zuerst
COPY package.json ./

# Installiere pnpm ohne patches-Verarbeitung
RUN npm install -g pnpm@10.4.1 && \
    npm install --omit=dev

# Kopiere alle anderen Dateien
COPY . .

# Build der Anwendung
RUN npm run build

# Production Stage - Nginx für statische Dateien
FROM nginx:alpine

# Kopiere die gebauten Dateien
COPY --from=builder /app/dist/public /usr/share/nginx/html

# Nginx Konfiguration für SPA
RUN echo 'server { \
    listen 3000; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose Port
EXPOSE 3000

# Health Check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
