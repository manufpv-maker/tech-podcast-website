# Railway-optimierte Dockerfile für statische React-Website
# Kostenlose Version: Minimale Größe und schnelle Deployments

FROM node:22-alpine

WORKDIR /app

# Kopiere alle Dateien
COPY . .

# Installiere pnpm
RUN npm install -g pnpm@10.4.1

# Installiere Dependencies - ignoriere Peer-Dependency Warnungen
RUN pnpm install --no-strict-peer-dependencies

# Build die React-App
RUN pnpm exec vite build

# Installiere serve um statische Dateien zu servieren
RUN npm install -g serve

# Expose Port
EXPOSE 3000

# Health Check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Start Server - serviere die gebauten Dateien
CMD ["serve", "-s", "dist/public", "-l", "3000"]
