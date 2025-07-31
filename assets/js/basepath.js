// assets/basePath.js
const basePath = (function () {
    const pathName = window.location.pathname;
    console.log("DEBUG - window.location.pathname:", pathName); // ✅ Debug line

    // Check if 'dipr' is in the path
    if (pathName.includes('/dipr/')) {
        return '/dipr';
    }

    // Fallback to root if 'dipr' is not found (local development)
    return '/';
})();

console.log("DEBUG - Resolved basePath:", basePath); // ✅ Debug line
window.basePath = basePath;
