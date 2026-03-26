# Shiksha Portal PWA Wrapper

This is a lightweight Progressive Web App wrapper for the Shiksha Google Apps Script Educational Portal.

## Setup Instructions

1.  **Icons:** 
    *   Place your app icon (192x192px) in this folder and name it `icon-192.png`.
    *   Place your app icon (512x512px) in this folder and name it `icon-512.png`.
2.  **URL:** 
    *   The portal is currently linked to your Apps Script URL in `index.html`. If you ever update your GAS deployment, update the `src` attribute in the `<iframe>` tag inside `index.html`.

## How to Deploy to GitHub Pages

1.  Create a new repository on GitHub.
2.  Upload all these files (`index.html`, `style.css`, `app.js`, `manifest.json`, `sw.js`, `offline.html`, and your two icon files).
3.  Go to **Settings** > **Pages**.
4.  Under **Build and deployment** > **Branch**, select `main` and click **Save**.
5.  After a minute, GitHub will give you a URL (e.g., `https://yourusername.github.io/reponame`).
6.  Open that URL on your phone's browser (Chrome for Android, Safari for iOS).
7.  Select **"Add to Home Screen"** from the browser menu.

## Features
*   **Standalone Mode:** Opens without browser address bars.
*   **Splash Screen:** Smooth loading transition.
*   **Service Worker:** Caches UI assets for speed.
*   **Responsive:** Full-screen iframe coverage.
