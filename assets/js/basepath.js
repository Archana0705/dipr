// basePath.js
const basePath = (function () {
    const pathParts = window.location.pathname.split('/');
    const subFolder = pathParts[1]; // e.g., 'dipr'

    // If hosted at root (e.g., localhost/index.html), subFolder might be ''
    if (!subFolder || subFolder === 'index.html') {
        return '/';
    }

    return `/${subFolder}/`;
})();

window.basePath = basePath;
