document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#navigation");
    const footerYear = document.querySelector("#footer-year");
    const projectToggles = document.querySelectorAll(".project-toggle");

    footerYear.textContent = new Date().getFullYear();

    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("show");
    });

    projectToggles.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            const details = this.nextElementSibling;
            if (!details) return;

            const isOpen = details.style.display === "block";
            details.style.display = isOpen ? "none" : "block";
            this.textContent = isOpen ? "View details" : "Hide details";
        });
    });
});
