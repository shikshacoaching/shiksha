// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Failed', err));
    });
}

// Handle Iframe Loading
const iframe = document.getElementById('app-frame');
const loadingScreen = document.getElementById('loading-screen');

const isMobile = window.innerWidth <= 768;

if (isMobile) {
    // SUPER FAST MOBILE START: No delays, no waiting.
    if (loadingScreen) loadingScreen.remove();
    iframe.style.display = 'block';
} else {
    // DESKTOP: Keep the nice fade-in effect
    iframe.onload = function() {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
            iframe.style.display = 'block';
            setTimeout(() => loadingScreen.remove(), 500);
        }, 800);
    };
}

// Prevent accidental pulldown refresh on mobile
window.addEventListener('load', function() {
    document.body.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) e.preventDefault();
    }, {passive: false});
});
