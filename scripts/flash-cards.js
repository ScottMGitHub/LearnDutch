
const refresh = () => {
    var randomCard = flashCards[Math.floor(Math.random()*flashCards.length)];
    var cardFront = document.querySelector(".card-front");
    var cardFrontSubText = randomCard[0][1] == "" ? "" : `(${randomCard[0][1]})`;
    cardFront.innerHTML = `<h2>${randomCard[0][0]}</h2><p>${cardFrontSubText}</p><p class="sentence">"${randomCard[0][2]}"</p>`;

    var cardBack = document.querySelector(".card-back");
    var cardBackSubText = randomCard[1][1] == "" ? "" : `(${randomCard[1][1]})`;
    cardBack.innerHTML = `<h2>${randomCard[1][0]}</h2><p>${cardBackSubText}</p><p class="sentence">"${randomCard[1][2]}"</p>`;

    cardFront.classList.remove("hide");
    cardBack.classList.add("hide");
}

const flip = () => {
    const cardFront = document.querySelector(".card-front");
    const cardBack = document.querySelector(".card-back");
    cardFront.classList.toggle("hide");
    cardBack.classList.toggle("hide");
}

window.onload = (event) => {
    refresh();
    const cardElement = document.querySelector(".card");
    cardElement.addEventListener("click", flip);
}
