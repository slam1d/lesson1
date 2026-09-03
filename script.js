// Специально простой JS.
// На этапе оптимизации можно заменить обычный script на defer.

console.log("Adventure website loaded");

function showMessage() {
    alert("Отлично! Ваше путешествие скоро начнётся.");
}

// Небольшая дополнительная активность страницы
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.style.transform = "translateY(-5px)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "translateY(0)";
        });

    });

});