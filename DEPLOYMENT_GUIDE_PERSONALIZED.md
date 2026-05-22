# 🚀 Personalisierte Deployment-Anleitung für manufpv-maker

Diese Anleitung ist speziell für dein Projekt konfiguriert.

## Deine GitHub-Informationen

```
Username: manufpv-maker
Repository: tech-podcast-website
Repository URL: https://github.com/manufpv-maker/tech-podcast-website.git
```

---

## Schritt 1: Code zu GitHub pushen

Da du bereits ein Repository erstellt hast, folge diesen Schritten:

### Option A: Mit Manus UI (Empfohlen - Automatisch)

1. Öffne die Manus Management UI (rechts im Fenster)
2. Klicke auf das **⋯** (Drei-Punkte-Menü) oben rechts
3. Wähle **"GitHub"**
4. Klicke **"Export to GitHub"**
5. Wähle deinen Account `manufpv-maker`
6. Der Code wird automatisch zu deinem Repository gepusht

**Fertig!** Dein Code ist jetzt auf GitHub.

### Option B: Mit Git-Befehlen (Terminal)

Falls du es manuell machen möchtest:

```bash
# Navigiere zum Projektverzeichnis
cd /home/ubuntu/tech-podcast-website

# Initialisiere Git (falls noch nicht geschehen)
git init

# Füge alle Dateien hinzu
git add .

# Erstelle einen Commit
git commit -m "Initial commit: Tech Podcast Website with Cyberpunk Design"

# Verbinde mit deinem GitHub Repository
git remote add origin https://github.com/manufpv-maker/tech-podcast-website.git

# Ändere den Branch zu 'main'
git branch -M main

# Pushe den Code
git push -u origin main
```

### Überprüfe auf GitHub

Gehe zu: **https://github.com/manufpv-maker/tech-podcast-website**

Du solltest sehen:
- ✅ `Dockerfile`
- ✅ `railway.json`
- ✅ `package.json`
- ✅ `client/` Verzeichnis
- ✅ `server/` Verzeichnis
- ✅ `RAILWAY_DEPLOYMENT.md`
- ✅ `GITHUB_SETUP.md`

---

## Schritt 2: Railway Deployment

### Option A: Mit Railway CLI (Schnellste Methode)

```bash
# 1. Installiere Railway CLI
npm i -g @railway/cli

# 2. Melde dich bei Railway an
railway login

# 3. Initialisiere ein neues Projekt
railway init

# 4. Deploye die Anwendung
railway up

# 5. Öffne das Dashboard
railway open
```

Nach dem Deploy erhältst du eine URL wie:
```
https://tech-podcast-website-production.up.railway.app
```

### Option B: Mit Railway Dashboard (Web-UI)

1. Gehe zu **https://railway.app**
2. Melde dich an oder registriere dich
3. Klicke **"Create New Project"**
4. Wähle **"Deploy from GitHub"**
5. Verbinde dein GitHub-Konto
6. Wähle das Repository: `manufpv-maker/tech-podcast-website`
7. Railway erkennt automatisch:
   - `Dockerfile` ✅
   - `railway.json` ✅
8. Klicke **"Deploy"**

**Warte 3-5 Minuten** bis das Deployment abgeschlossen ist.

### Option C: Mit GitHub Actions (Automatisch bei jedem Push)

1. Gehe zu **https://railway.app/dashboard**
2. Öffne dein Projekt
3. Gehe zu **Settings** → **Environment**
4. Kopiere dein **Railway Token**
5. Gehe zu **https://github.com/manufpv-maker/tech-podcast-website**
6. Gehe zu **Settings** → **Secrets and variables** → **Actions**
7. Klicke **"New repository secret"**
8. Name: `RAILWAY_TOKEN`
9. Value: Dein Railway Token (einfügen)
10. Klicke **"Add secret"**

Jetzt deployt Railway automatisch, wenn du Code zu GitHub pushst!

---

## Schritt 3: Nach dem Deployment

### Deine Website URL

Nach erfolgreichem Deployment erhältst du eine URL:

```
https://tech-podcast-website-production.up.railway.app
```

Diese URL kannst du teilen und verwenden.

### Logs anschauen

```bash
# Mit Railway CLI
railway logs

# Oder im Dashboard:
# https://railway.app/dashboard → Dein Projekt → "web" Service → "Logs"
```

### Performance überwachen

1. Gehe zu **https://railway.app/dashboard**
2. Öffne dein Projekt
3. Klicke auf **"Metrics"**
4. Überwache:
   - CPU Usage
   - Memory Usage
   - Network I/O

---

## Häufige Probleme & Lösungen

### Problem: Deployment schlägt fehl

```bash
# Überprüfe die Logs
railway logs

# Häufige Fehler:
# 1. "pnpm not found" → pnpm wird automatisch installiert
# 2. "Build failed" → Überprüfe package.json
# 3. "Port already in use" → Railway nutzt automatisch Port 3000
```

### Problem: Website lädt nicht

1. Warte 2-3 Minuten nach dem Deploy
2. Überprüfe die Logs: `railway logs`
3. Überprüfe den Service-Status im Dashboard
4. Stelle sicher, dass der Service **Running** ist

### Problem: Hohe CPU/Memory Nutzung

1. Gehe zu **Metrics**
2. Wenn über 80%: Das ist normal für die kostenlose Tier
3. Upgrade zu bezahlter Tier wenn nötig

---

## Kostenübersicht

| Ressource | Kostenlos | Kosten |
|-----------|-----------|--------|
| Compute | Shared | Kostenlos bis $5/Monat |
| RAM | 512 MB | Kostenlos |
| Storage | Ephemeral | Kostenlos |
| Bandbreite | Unbegrenzt | Kostenlos |
| **Gesamtbudget** | **$5/Monat** | **Kostenlos** |

Diese Website sollte **unter $5/Monat** bleiben.

---

## Nächste Schritte

### 1. Personalisiere den Content

Bearbeite die Datei `client/src/components/Episodes.tsx`:

```tsx
const episodes: Episode[] = [
  {
    id: 1,
    title: 'Dein Episode Titel',
    description: 'Deine Episode Beschreibung',
    date: 'Mai 22, 2024',
    duration: '1h 15m',
    guests: 'Dein Gast Name',
    image: 'https://dein-bild-url.png',
  },
  // Weitere Episodes...
];
```

### 2. Custom Domain (Optional)

Du kannst eine Custom Domain kaufen:

1. Gehe zu **https://railway.app/dashboard**
2. Öffne dein Projekt
3. Gehe zu **Settings** → **Domains**
4. Klicke **"Add Domain"**
5. Wähle eine Domain (z.B. `techpodcast.com`)
6. Railway aktiviert automatisch HTTPS

### 3. Monitoring einrichten

1. Gehe zu **Settings** → **Alerts**
2. Richte Alerts ein für:
   - High CPU Usage
   - High Memory Usage
   - Deployment Failures

---

## Schnelle Referenz

| Aktion | Befehl |
|--------|--------|
| Logs anschauen | `railway logs` |
| Dashboard öffnen | `railway open` |
| Status überprüfen | `railway status` |
| Neu deployen | `git push` (mit GitHub Actions) |
| Lokal testen | `pnpm run dev` |

---

## Support & Ressourcen

- **Railway Docs**: https://docs.railway.app
- **Railway Community**: https://railway.app/community
- **GitHub Docs**: https://docs.github.com
- **Manus Support**: https://help.manus.im

---

## Zusammenfassung für dich

```
✅ Repository: https://github.com/manufpv-maker/tech-podcast-website
✅ Deployment: Railway (kostenlos)
✅ Website wird live unter: https://tech-podcast-website-production.up.railway.app
✅ Automatische Deployments: Mit GitHub Actions
✅ Kosten: $0-5/Monat
```

**Du bist bereit! 🚀**

Folge einfach Schritt 1 & 2 oben und deine Website läuft live!
