# Railway-optimierte Multi-Stage Build für minimale Größe und schnelle Deployments
# Kostenlose Version: Optimiert für niedrige Ressourcennutzung

FROM node:22-alpine AS builder

WORKDIR /app

# Kopiere alle Dateien für Build
COPY . .

# Installiere pnpm
RUN npm install -g pnpm@10.4.1

# Installiere alle Dependencies (inklusive dev)
RUN pnpm install --frozen-lockfile

# Build der Anwendung
RUN pnpm run build

# Production Stage - Minimale Größe
FROM node:22-alpine

WORKDIR /app

# Installiere pnpm
RUN npm install -g pnpm@10.4.1

# Kopiere package.json und lock file
COPY package.json pnpm-lock.yaml ./

# Installiere nur Production Dependencies (ohne patches)
RUN pnpm install --frozen-lockfile --prod --no-optional || true

# Kopiere nur die notwendigen Build-Artefakte
COPY --from=builder /app/dist ./dist

# Expose Port
EXPOSE 3000

# Health Check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start Production Server
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
