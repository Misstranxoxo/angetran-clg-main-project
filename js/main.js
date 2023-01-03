function angesWorld() {
    alert("Welcome to my world!");
}
angesWorld();
//this is an alert for when the angesWorld function is called

favCharacter (" Hello Kitty");
function favCharacter(name) {
    console.log ("My favourite character of all time is" + name);
}
// Hoisting= set a function and call them wherever they need to be executed without worrying that the function declaration won't be read

let firstPrize = 1000;
const departmName = "DH";
let greeting ="Congratulations!";
let morning = true;

console.log(morning);
console.log(firstPrize);

let firstWinner="Steve";
console.log ( "the winner is "+ firstWinner);
console.log (`the winner is still ${firstWinner}`);

const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase());
console.log (sentence.length)
console.log(`The length of the sentence is ${sentence.length}`);
// expected output: "the quick brown fox jumps over the lazy dog."
// testing variables & data types

console.log (10*7);
console.log (15/3);
//testing arthmetic operators
let attendee = 1;
console.log (attendee ++);
console.log (attendee ++);
console.log (attendee ++);
//testing decrement operators 

typeof attendee;
console.log(typeof attendee)
let attendeeName ="Ange";
console.log(typeof attendeeName);
// to know what type of data we are working with, e.g text = string

let James = 42;
let Ange = 36;
//defining variables

console.log (James >=37 && James <=55);
console.log (Ange >=20 && Ange <=35);
// expressions which return different values to console depending on conditions

let age = 36;
const schoolOfCode = (age >18)? "You're in!" : "Sorry your're out";
console.log (schoolOfCode);
// condition ? ifTrue: ifFalse
// testing ternary operator

let discount = 10;
const tee = 20;
const pants = 30;
const candle = 50;

function shoppingSale( candle, pants) {
    candle = 20;
    pants = 20;
    let shoppingCart = tee + pants + candle; 
    if (shoppingCart <= 60) {
        console.log ("you need to spend more");
        return;
    } else {
            console.log(shoppingCart -= discount);        
    }
}

shoppingSale();
