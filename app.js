
// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Failed', err));
    });
}

// Handle Splash Screen Timing (Google Drive Style)
const iframe = document.getElementById('app-frame');
const loadingScreen = document.getElementById('loading-screen');

// Ensures the splash screen stays for exactly 3 seconds for a premium feel
const minDisplayTime = 3000; 
const startTime = Date.now();

iframe.onload = function() {
    const timeSpent = Date.now() - startTime;
    const timeLeft = Math.max(0, minDisplayTime - timeSpent);

    setTimeout(() => {
        // Add the fade-out class (defined in your style.css)
        loadingScreen.classList.add('fade-out');
        iframe.style.display = 'block';
        
        // Fully remove the loading screen from view after the 0.6s fade animation
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 600);
    }, timeLeft);
};

// Prevent accidental pulldown refresh on mobile
window.addEventListener('load', function() {
    document.body.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) e.preventDefault();
    }, {passive: false});
});
