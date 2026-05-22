# GitHub Setup Anleitung

Diese Anleitung erklärt alle Schritte, um dein Projekt auf GitHub zu pushen und es für Railway vorzubereiten.

## Was du brauchst

1. **GitHub Account**: Kostenlos auf [github.com](https://github.com)
2. **Git**: Installiert auf deinem Computer
3. **Manus UI Zugriff** oder **Terminal/Command Line**

## Methode 1: Mit Manus Management UI (Empfohlen)

Dies ist die einfachste Methode, da Manus alles automatisch für dich macht.

### Schritt 1: Öffne die Manus Management UI

1. Klicke auf den **"View"** Button in der Project Card
2. Die Management UI öffnet sich auf der rechten Seite
3. Klicke auf das **"⋯"** (Drei-Punkte-Menü) oben rechts
4. Wähle **"GitHub"**

### Schritt 2: Exportiere zu GitHub

1. Du siehst einen Dialog "Export to GitHub"
2. Gib einen **Repository Namen** ein (z.B. `tech-podcast-website`)
3. Wähle deinen **GitHub Account** als Owner
4. Klicke **"Create Repository"**

Manus erstellt automatisch:
- Ein neues Repository auf GitHub
- Committed deinen Code
- Pushed alles zu GitHub

**Fertig!** Dein Code ist jetzt auf GitHub.

---

## Methode 2: Manuell mit Git (Für fortgeschrittene Nutzer)

Falls du die Manus UI nicht nutzen möchtest oder mehr Kontrolle brauchst.

### Schritt 1: Git konfigurieren

```bash
# Öffne Terminal/Command Prompt
# Konfiguriere Git mit deinen Daten

git config --global user.name "Dein Name"
git config --global user.email "deine.email@example.com"
```

### Schritt 2: GitHub Repository erstellen

1. Gehe zu [github.com/new](https://github.com/new)
2. Gib einen **Repository Name** ein: `tech-podcast-website`
3. Wähle **Public** (damit Railway es sehen kann)
4. **Nicht** "Initialize this repository with:" ankreuzen
5. Klicke **"Create repository"**

Du siehst jetzt eine Seite mit Befehlen. Kopiere die HTTPS URL (sieht so aus: `https://github.com/dein-username/tech-podcast-website.git`)

### Schritt 3: Code zu GitHub pushen

```bash
# Navigiere zu deinem Projektverzeichnis
cd /home/ubuntu/tech-podcast-website

# Initialisiere Git (falls noch nicht geschehen)
git init

# Füge alle Dateien hinzu
git add .

# Erstelle einen Commit
git commit -m "Initial commit: Tech Podcast Website with Cyberpunk Design"

# Verbinde mit GitHub (ersetze die URL!)
git remote add origin https://github.com/DEIN_USERNAME/tech-podcast-website.git

# Ändere den Branch zu 'main' (Standard auf GitHub)
git branch -M main

# Pushe den Code zu GitHub
git push -u origin main
```

### Schritt 4: Überprüfe auf GitHub

1. Gehe zu `https://github.com/dein-username/tech-podcast-website`
2. Du solltest deinen Code sehen
3. Überprüfe, dass folgende Dateien vorhanden sind:
   - `Dockerfile`
   - `railway.json`
   - `package.json`
   - `client/` Verzeichnis
   - `server/` Verzeichnis

---

## GitHub Informationen für Railway

Wenn du dein Projekt auf Railway deployst, brauchst du folgende Informationen:

### 1. Repository URL
```
https://github.com/DEIN_USERNAME/tech-podcast-website
```

### 2. GitHub Account
```
Dein GitHub Username (z.B. "max-mustermann")
```

### 3. Repository Name
```
tech-podcast-website
```

### 4. Branch (Standard)
```
main
```

## Wichtige Dateien für Railway

Railway erkennt automatisch diese Dateien:

| Datei | Zweck |
|-------|-------|
| `Dockerfile` | Definiert wie die App gebaut wird |
| `railway.json` | Railway-spezifische Konfiguration |
| `package.json` | Node.js Dependencies |
| `pnpm-lock.yaml` | Genaue Versionen der Dependencies |
| `server/index.ts` | Express Server für Production |

Alle diese Dateien sind bereits im Projekt vorhanden.

## Häufige Fehler

### Fehler: "Repository already exists"

```bash
# Wenn das Repository bereits existiert:
git remote remove origin
git remote add origin https://github.com/DEIN_USERNAME/tech-podcast-website.git
git push -u origin main
```

### Fehler: "Permission denied (publickey)"

```bash
# Du brauchst SSH Keys für GitHub
# Oder nutze stattdessen HTTPS mit Personal Access Token

# Generiere einen Token:
# GitHub → Settings → Developer settings → Personal access tokens → Generate new token
# Kopiere den Token und nutze ihn als Passwort beim Push
```

### Fehler: "fatal: not a git repository"

```bash
# Du bist nicht im richtigen Verzeichnis
cd /home/ubuntu/tech-podcast-website
git init
```

## Nächste Schritte

Nachdem dein Code auf GitHub ist:

1. **Railway Deployment**: Siehe [RAILWAY_DEPLOYMENT.md](./RAILWAY_DEPLOYMENT.md)
2. **Custom Domain**: Kaufe eine Domain und verbinde sie
3. **Continuous Deployment**: Railway deployt automatisch bei jedem Push

## GitHub Best Practices

### Commits schreiben

```bash
# Gute Commit-Nachrichten:
git commit -m "Add hero section with animations"
git commit -m "Fix: mobile navigation menu"
git commit -m "Update: cyberpunk color palette"

# Schlechte Commit-Nachrichten:
git commit -m "fix"
git commit -m "update"
git commit -m "asdf"
```

### Branches für Features

```bash
# Erstelle einen Branch für neue Features
git checkout -b feature/new-episode-page

# Mache deine Änderungen
# Commit und Push
git push -u origin feature/new-episode-page

# Erstelle einen Pull Request auf GitHub
# Merge nach Review
```

### .gitignore überprüfen

Die Datei `.gitignore` verhindert, dass große Dateien zu GitHub gepusht werden:

```
node_modules/        # Nicht pushen, wird mit `pnpm install` installiert
.env.local          # Nicht pushen, enthält Secrets
dist/               # Nicht pushen, wird beim Build generiert
.manus-logs/        # Nicht pushen, nur lokal
```

## Support

- GitHub Dokumentation: https://docs.github.com
- Git Dokumentation: https://git-scm.com/doc
- Manus Support: https://help.manus.im

## Zusammenfassung

| Schritt | Befehl/Aktion |
|---------|---------------|
| 1. Repository erstellen | GitHub → New Repository |
| 2. Git initialisieren | `git init` |
| 3. Dateien hinzufügen | `git add .` |
| 4. Commit erstellen | `git commit -m "Initial commit"` |
| 5. Remote verbinden | `git remote add origin <URL>` |
| 6. Zu GitHub pushen | `git push -u origin main` |
| 7. Railway deployen | Railway UI oder CLI |

**Du bist bereit für Railway!** 🚀
