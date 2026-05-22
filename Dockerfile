# Railway-optimierte Dockerfile für statische React-Website
# Kostenlose Version: Minimale Größe und schnelle Deployments

FROM node:22-alpine AS builder

WORKDIR /app

# Kopiere alle Dateien
COPY . .

# Installiere pnpm
RUN npm install -g pnpm@10.4.1

# Installiere Dependencies mit legacy-peer-deps um Vite-Konflikt zu beheben
RUN pnpm install --frozen-lockfile --legacy-peer-deps || pnpm install --legacy-peer-deps

# Build nur die React-App (nicht den Server)
RUN pnpm exec vite build

# Production Stage - Nginx für statische Dateien
FROM nginx:alpine

# Kopiere die gebauten Dateien
COPY --from=builder /app/dist/public /usr/share/nginx/html

# Nginx Konfiguration für SPA (Single Page Application)
RUN echo 'server { \
    listen 3000; \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    \
    # Cache busting für assets \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    # SPA routing - alle URLs gehen zu index.html \
    location / { \
        try_files $uri $uri/ /index.html; \
        add_header Cache-Control "no-cache, no-store, must-revalidate"; \
    } \
    \
    # Gzip compression \
    gzip on; \
    gzip_types text/plain text/css text/javascript application/javascript application/json; \
}' > /etc/nginx/conf.d/default.conf

# Expose Port
EXPOSE 3000

# Health Check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
