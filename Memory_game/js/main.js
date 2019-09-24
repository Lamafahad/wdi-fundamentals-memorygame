



const cards = ["queen" , "queen" , "king" , "king"];
const cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push("cardTwo");
console.log("User flipped king");

if (cardsInPlay.length !== 2){
  alert ("select two cards please!");
}
   else if (cardOne === cardTwo){
  alert("You found a match!");
}
else {
alert("Sorry, Try again"); }
