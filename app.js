// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Failed', err));
    });
}

// Handle Modern Splash Screen Transition
const iframe = document.getElementById('app-frame');
const loadingScreen = document.getElementById('loading-screen');

// We want the splash to show for at least 2.5 seconds, 
// even if the iframe loads faster, to maintain the "App" feel.
const minDisplayTime = 2500; 
const startTime = Date.now();

iframe.onload = function() {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        iframe.style.display = 'block';
        
        // Remove from DOM after transition to save memory
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, remainingTime);
};

// Prevent accidental pulldown refresh on mobile
window.addEventListener('load', function() {
    document.body.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) e.preventDefault();
    }, {passive: false});
});
