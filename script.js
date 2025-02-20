document.addEventListener("DOMContentLoaded", function() {
    const postIts = document.querySelectorAll(".post-it");

    postIts.forEach(postIt => {
        postIt.addEventListener("click", function() {
            this.classList.toggle("flipped");
        });
    });
});
