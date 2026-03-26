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
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // MOBILE: Remove immediately with no delay or animation
        loadingScreen.remove();
        iframe.style.display = 'block';
    } else {
        // DESKTOP: Keep the original smooth fade transition
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
            iframe.style.display = 'block';
            setTimeout(() => loadingScreen.remove(), 500);
        }, 800);
    }
};

// Prevent accidental pulldown refresh on mobile
window.addEventListener('load', function() {
    document.body.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) e.preventDefault();
    }, {passive: false});
});
