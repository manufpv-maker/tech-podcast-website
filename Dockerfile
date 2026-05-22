# Railway-optimierte Multi-Stage Build für minimale Größe und schnelle Deployments
# Kostenlose Version: Optimiert für niedrige Ressourcennutzung

FROM node:22-alpine AS builder

WORKDIR /app

# Kopiere nur die notwendigen Dateien für Dependencies
COPY package.json pnpm-lock.yaml ./

# Installiere pnpm und Dependencies
RUN npm install -g pnpm@10.4.1 && \
    pnpm install --frozen-lockfile

# Kopiere Source Code
COPY . .

# Build der Anwendung
RUN pnpm run build

# Production Stage - Minimale Größe
FROM node:22-alpine

WORKDIR /app

# Installiere nur Runtime Dependencies
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@10.4.1 && \
    pnpm install --frozen-lockfile --prod

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
