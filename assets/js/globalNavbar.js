// assets/navbar/globalNavbar.js
document.addEventListener("DOMContentLoaded", function () {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

    // Show or hide admin-only elements
    const adminMenus = document.querySelectorAll(".admin-menu-show");
    adminMenus.forEach(el => {
        el.style.display = isAdminLoggedIn ? "block" : "none";
    });

    // Logout handler
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.clear();
            window.location.href = "/index.html";
        });
    }
});
