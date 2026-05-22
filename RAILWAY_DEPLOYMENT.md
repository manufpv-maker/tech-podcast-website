# Railway Deployment Guide

Diese Anleitung erklärt, wie du die Tech Podcast Website auf Railway (kostenlose Version) deployst.

## Voraussetzungen

- Ein GitHub-Konto
- Ein Railway-Konto (kostenlos auf [railway.app](https://railway.app))
- Git installiert auf deinem Computer

## Schritt 1: GitHub Repository erstellen

### Option A: Mit Manus UI (empfohlen)

1. Öffne die Manus Management UI
2. Gehe zu **Settings** → **GitHub**
3. Klicke auf "Export to GitHub"
4. Wähle einen Repository-Namen (z.B. `tech-podcast-website`)
5. Wähle deinen GitHub-Account als Owner
6. Klicke "Create Repository"

Das Repository wird automatisch mit deinem Code erstellt.

### Option B: Manuell mit Git

```bash
# Gehe in das Projektverzeichnis
cd tech-podcast-website

# Initialisiere ein Git-Repository
git init
git add .
git commit -m "Initial commit: Tech Podcast Website"

# Erstelle ein neues Repository auf GitHub
# Gehe zu https://github.com/new und erstelle ein leeres Repository

# Verbinde dein lokales Repository mit GitHub
git remote add origin https://github.com/DEIN_USERNAME/tech-podcast-website.git
git branch -M main
git push -u origin main
```

## Schritt 2: Railway Deployment

### Option A: Mit Railway CLI (schnellste Methode)

```bash
# Installiere Railway CLI
npm i -g @railway/cli

# Melde dich bei Railway an
railway login

# Starte ein neues Projekt
railway init

# Deploye die Anwendung
railway up
```

### Option B: Mit Railway Dashboard (Web-UI)

1. Gehe zu [railway.app](https://railway.app)
2. Melde dich an oder registriere dich
3. Klicke auf **"Create New Project"**
4. Wähle **"Deploy from GitHub"**
5. Verbinde dein GitHub-Konto
6. Wähle das Repository `tech-podcast-website`
7. Railway erkennt automatisch die `Dockerfile` und `railway.json`
8. Klicke auf **"Deploy"**

### Option C: Mit GitHub Actions (automatische Deployments)

Railway kann automatisch deployen, wenn du Code zu GitHub pushst:

1. Gehe zu deinem Railway-Projekt
2. Gehe zu **Settings** → **Environment**
3. Kopiere dein **Railway Token**
4. Gehe zu deinem GitHub-Repository
5. Gehe zu **Settings** → **Secrets and variables** → **Actions**
6. Erstelle ein neues Secret namens `RAILWAY_TOKEN` mit deinem Token
7. Railway wird automatisch deployen, wenn du Code pushst

## Schritt 3: Konfiguration auf Railway

### Umgebungsvariablen setzen

1. Gehe zu deinem Railway-Projekt
2. Klicke auf den **"web"** Service
3. Gehe zu **Variables**
4. Füge folgende Variablen hinzu (optional):

```
NODE_ENV=production
PORT=3000
```

### Domain konfigurieren

1. Gehe zu deinem Railway-Projekt
2. Klicke auf den **"web"** Service
3. Gehe zu **Settings**
4. Unter **Domains** siehst du die automatisch generierte Domain (z.B. `tech-podcast-website-production.up.railway.app`)
5. Du kannst eine Custom Domain hinzufügen (kostenpflichtig)

## Schritt 4: Monitoring und Logs

### Logs anschauen

```bash
# Mit Railway CLI
railway logs

# Oder im Dashboard:
# Gehe zu deinem Projekt → "web" Service → "Logs"
```

### Performance überwachen

1. Gehe zu deinem Railway-Projekt
2. Klicke auf **"Metrics"**
3. Überwache CPU, Memory, und Network Usage

## Wichtige Informationen für die kostenlose Version

### Ressourcenlimits

- **CPU**: Shared (bis zu 1 CPU)
- **RAM**: 512 MB
- **Storage**: Nicht persistent (wird bei jedem Deploy gelöscht)
- **Bandbreite**: Unbegrenzt
- **Kostenlos bis**: $5/Monat Nutzung

### Optimierungen für kostenlose Version

Diese Website ist bereits optimiert:

1. **Alpine Linux Docker Image**: Minimale Größe (~150MB)
2. **Production Build**: Nur notwendige Dependencies
3. **Static Site Generation**: Schnelle Ladezeiten
4. **Gzip Compression**: Automatisch aktiviert
5. **Health Checks**: Automatische Neustarts bei Fehlern

### Kosten sparen

- Nutze die kostenlose Tier solange möglich
- Deaktiviere Auto-Deploy wenn nicht nötig
- Nutze Railway's **Sleeping** Feature für inaktive Projekte
- Überwache deine Nutzung im Dashboard

## Troubleshooting

### Deployment schlägt fehl

```bash
# Überprüfe die Logs
railway logs

# Häufige Fehler:
# 1. Node Version nicht kompatibel → package.json überprüfen
# 2. Dependencies nicht installiert → pnpm-lock.yaml überprüfen
# 3. Build Fehler → Lokal mit `pnpm run build` testen
```

### Website lädt nicht

1. Überprüfe die Logs: `railway logs`
2. Überprüfe die Domain im Railway Dashboard
3. Stelle sicher, dass der Service **Running** ist
4. Warte 2-3 Minuten nach dem Deploy

### Hohe CPU/Memory Nutzung

1. Gehe zu **Metrics**
2. Überprüfe die Nutzung
3. Wenn über 80%: Upgrade auf bezahlte Tier oder optimiere Code

## GitHub Informationen, die du brauchst

Für das Deployment benötigst du:

1. **GitHub Username**: Dein GitHub-Benutzername
2. **GitHub Token** (optional): Für automatische Deployments
   - Gehe zu GitHub → Settings → Developer settings → Personal access tokens
   - Erstelle einen Token mit `repo` Zugriff
3. **Repository Name**: z.B. `tech-podcast-website`
4. **Repository URL**: z.B. `https://github.com/username/tech-podcast-website`

## Nächste Schritte

Nach dem erfolgreichen Deployment:

1. **Custom Domain**: Kaufe eine Domain und verbinde sie
2. **SSL/TLS**: Railway aktiviert automatisch HTTPS
3. **Analytics**: Nutze Umami Analytics (bereits konfiguriert)
4. **Monitoring**: Richte Alerts im Railway Dashboard ein

## Support

- Railway Dokumentation: https://docs.railway.app
- Railway Community: https://railway.app/community
- Manus Support: https://help.manus.im

## Kosten-Übersicht

| Ressource | Kostenlos | Bezahlt |
|-----------|-----------|---------|
| Compute | Shared | Dedicated |
| RAM | 512 MB | 1-8 GB |
| Storage | Ephemeral | Persistent |
| Preis | $5/Monat | Nach Nutzung |

Diese Website sollte unter $5/Monat bleiben, wenn du die kostenlose Tier nutzt.
