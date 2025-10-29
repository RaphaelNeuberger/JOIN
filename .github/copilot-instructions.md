# 🤖 Copilot Instructions

Diese Datei beschreibt, **wie GitHub Copilot Code-Vorschläge für dieses Projekt erzeugen soll.**

---

## 🌐 Projektkontext

Dieses Projekt verwendet **reines HTML, CSS und JavaScript (ES6)**.  
Ziel ist es, eine **strukturierte, responsive und wartbare** Website zu entwickeln, die gute Performance und Lesbarkeit bietet.  
Kein Build-Framework (z. B. React, Vue, Angular) wird genutzt.

---

## 🧱 Code-Struktur

- **HTML-Dateien** befinden sich im ``.
- **CSS-Dateien** liegen in `styles/`.
- **JavaScript-Dateien** liegen in `scripts/` und alle anderen die Main Script in `scripts.js`
- Verwende **relativ kurze Dateien** und **modulare JS-Funktionen**.
- Kein Inline-JavaScript oder Inline-CSS in HTML (Trennung von Struktur, Stil und Logik).

---

## 💻 Code-Stil & Formatierung

### HTML

- Verwende **semantische HTML-Tags** (`<header>`, `<main>`, `<section>`, `<footer>` usw.).
- Einrückung: **2 Leerzeichen**.
- Schließe alle Tags korrekt.
- Verwende **aussagekräftige `alt`-Attribute** bei Bildern.
- Keine Inline-Styles.
- schua das das HTML

### CSS

- Verwende **BEM-Namenskonvention** (`.block__element--modifier`).
- Verwende **CSS-Variablen** (`--color-primary`) für Farben, Abstände und Fonts.
- Keine IDs zum Stylen, nur Klassen.
- keine Deutsche erklärung nur english
- Mobile-First min-width: 320px mit Media Queries:
  ```css
  @media (min-width: 768px) {
    /* Desktop styles */
  }
  ```

### JavaScript

- init () per onload funktion im HTML im body
- keine Deutsche erklärung nur english
- jede Funktion darf nicht länger als 14 zeilen haben
- Jede JS Datei darf nicht länger als 400 zeichen haben
