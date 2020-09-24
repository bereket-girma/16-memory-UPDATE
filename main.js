// Have a "new game" screen with a single choice "new game"
// The game should have a total of 9 pairs (18 cards total)
// When the user runs out of turns, show a losing screen
// When the user finds a match, leave the cards face up and disallow clicking those cards
// When the chooses two cards that do not match, flip them back over
// When the user wins or loses, indicate as much
// All screens should be generated via JavaScript templates

// You have a bunch of cards arranged with their backs facing up. 
// You flip two over. If they match, they remain face up. 
// If they don't match, you flip them back over.

function test() {
    document.querySelector('.flip-card').style.transform = 'rotateY(180deg);'
  }
  document.querySelector('.flip-card').addEventListener('click', test)