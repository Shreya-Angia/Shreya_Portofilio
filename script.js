document.addEventListener("DOMContentLoaded", function() {
    const postIts = document.querySelectorAll(".post-it");

    postIts.forEach(postIt => {
        postIt.addEventListener("click", function() {
            this.classList.toggle("flipped");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const languages = document.querySelectorAll(".language");

    languages.forEach(lang => {
        lang.addEventListener("click", () => {
            lang.classList.toggle("flipped");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-navigation a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            
            const targetId = this.getAttribute("href"); // Récupère l'ID de la section
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth", // Défilement fluide
                    block: "start"
                });
            }
        });
    });
});



