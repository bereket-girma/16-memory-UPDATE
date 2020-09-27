// P E D A C

// 
// let divHtml = "aabbccddeeffgghhii"
// .split("")
//   .map((item) => `<div  id="${item}">${item}</div>`)
//   .join("");

// document.querySelector("#cards").innerHTML = divHtml;


// const cards = document.querySelectorAll('.card');

// function flipCard() {
//   this.classList.toggle('flip');
// }

// cards.forEach(card => card.addEventListener('click', flipCard));

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
  
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let random = Math.floor(Math.random() * 18);
    card.style.order = random;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
