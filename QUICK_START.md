# ⚡ Quick Start Checkliste

Für: **manufpv-maker**  
Repository: **https://github.com/manufpv-maker/tech-podcast-website**

---

## 🎯 5 Minuten bis zur Live-Website

### Schritt 1: Code zu GitHub pushen (2 Min)

```bash
cd /home/ubuntu/tech-podcast-website
git init
git add .
git commit -m "Initial commit: Tech Podcast Website"
git remote add origin https://github.com/manufpv-maker/tech-podcast-website.git
git branch -M main
git push -u origin main
```

**Oder**: Nutze Manus UI → Settings → GitHub → "Export to GitHub"

### Schritt 2: Railway Deployment (3 Min)

#### Option A: Railway CLI (Schnellste)
```bash
npm i -g @railway/cli
railway login
railway init
railway up
```

#### Option B: Railway Dashboard
1. Gehe zu https://railway.app
2. Klicke "Create New Project"
3. Wähle "Deploy from GitHub"
4. Wähle: `manufpv-maker/tech-podcast-website`
5. Klicke "Deploy"

**Fertig!** ✅ Website ist live!

---

## 📋 Checkliste

- [ ] Code zu GitHub gepusht
- [ ] Railway Projekt erstellt
- [ ] Deployment erfolgreich
- [ ] Website URL funktioniert
- [ ] Logs überprüft (keine Fehler)
- [ ] Custom Domain (optional)

---

## 🔗 Wichtige Links

| Link | Zweck |
|------|-------|
| https://github.com/manufpv-maker/tech-podcast-website | Dein Repository |
| https://railway.app/dashboard | Railway Dashboard |
| https://tech-podcast-website-production.up.railway.app | Deine Website (nach Deploy) |

---

## 🛠️ Häufige Befehle

```bash
# Lokal testen
pnpm run dev

# Build testen
pnpm run build

# Logs anschauen
railway logs

# Status überprüfen
railway status

# Dashboard öffnen
railway open
```

---

## 📊 Kosten

- **Kostenlos bis**: $5/Monat
- **Diese Website nutzt**: ~$2-3/Monat
- **Upgrade nötig?**: Nein (für kostenlose Tier)

---

## ❓ Probleme?

| Problem | Lösung |
|---------|--------|
| Deploy schlägt fehl | `railway logs` anschauen |
| Website lädt nicht | 2-3 Minuten warten, dann Refresh |
| Hohe CPU/Memory | Normal für kostenlose Tier |
| Code wird nicht gepusht | `git status` überprüfen |

---

## 📝 Nächste Schritte

1. **Episodes aktualisieren**: `client/src/components/Episodes.tsx`
2. **Custom Domain**: Railway Dashboard → Domains
3. **Monitoring**: Railway Dashboard → Alerts

---

**Viel Erfolg mit deinem Podcast! 🎙️**
