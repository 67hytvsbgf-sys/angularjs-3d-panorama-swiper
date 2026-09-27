# AngularJS 3D Panorama Swiper

Fullscreen Swiper-Slider mit **3D Coverflow / Panorama-Effekt** auf Basis von **AngularJS 1.x** und **Swiper.js**.

Bilder werden aus dem Ordner `images/` geladen, in **zufälliger Reihenfolge** angezeigt und wechseln alle **5 Sekunden** automatisch.

## Features

- Fullscreen 3D Coverflow-Effekt (Panorama-ähnlich)
- Automatischer Wechsel alle 5 Sekunden
- Zufällige Reihenfolge der Bilder (bei jedem Laden neu gemischt)
- Touch / Maus / Tastatur steuerbar
- Loop (Endlos)
- Responsive

## Schnellstart

1. Repository klonen oder herunterladen
2. Bilder in den Ordner `images/` legen (JPG, PNG, WebP …)
3. In `app.js` die Dateinamen in das Array `imageFiles` eintragen
4. `index.html` im Browser öffnen (oder über einen lokalen Server)

### Bilder hinzufügen

```js
// in app.js
var imageFiles = [
  'images/1.jpg',
  'images/2.jpg',
  'images/mein-urlaub.jpg',
  'images/panorama.png'
  // ...
];
```

## Ordnerstruktur

```
angularjs-3d-panorama-swiper/
├── index.html          # Hauptseite
├── app.js              # AngularJS Controller + Swiper-Konfiguration
├── images/             # ← hier deine Bilder hochladen
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
└── README.md
```

## Hinweise

- Für lokale Tests mit `file://` können CORS-Probleme auftreten. Am besten einen einfachen lokalen Server nutzen:

  ```bash
  # Python 3
  python -m http.server 8000

  # oder npx
  npx serve .
  ```

- Der Effekt `coverflow` erzeugt den klassischen 3D-Panorama-/Coverflow-Look. Du kannst in `app.js` die Parameter `rotate`, `depth` und `modifier` anpassen.

- Autoplay-Intervall: `delay: 5000` (Millisekunden).

## Technologien

- AngularJS 1.8.3
- Swiper.js 11 (Coverflow Effect + Autoplay)
- Vanilla CSS (Fullscreen)

Viel Spaß!
