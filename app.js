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

iframe.onload = function() {
    // Smooth fade transition
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        iframe.style.display = 'block';
        // Completely remove from DOM after fade for performance
        setTimeout(() => loadingScreen.remove(), 500);
    }, 1500); // 1.5 seconds shows the logo long enough to feel professional
};

// Prevent accidental pulldown refresh on mobile
window.addEventListener('load', function() {
    document.body.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) e.preventDefault();
    }, {passive: false});
});
