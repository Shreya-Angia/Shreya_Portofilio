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



