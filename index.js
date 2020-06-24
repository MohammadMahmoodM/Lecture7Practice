// console.log("Before Prepare Food");

// function prepareFood(callback) {
//     setTimeout( () => {
//     console.log("Please Prepare Food")
// }, 20);
// }

// prepareFood();

// console.log("Food is Ready")

// Call Back Simple Function

// console.log("Before Prepare Food");



// function prepareFood(abc) {
//     setTimeout( () => {
//     console.log("Please Prepare Food");
//     abc("Food is ready");
// }, 20);
// }

// function mycallback(value){
//     console.log("Value =", value)
// }

// prepareFood(mycallback);



// console.log("After Food Prepared");

// Call Back Multi Function

// console.log("Before Prepare Food");


// function prepareFood(abc) {
//     setTimeout( () => {
//     console.log("Please Prepare Food");
//     abc("Food is ready");
// }, 10);
// }

// function prepareFrenchToast(abc) {
//     setTimeout( () => {
//     console.log("Please Prepare Food French Toast");
//     abc("French Toast is ready");
// }, 15);
// }

// function mycallback(value){
//     console.log("You may Eat as", value)
// }

// prepareFood(mycallback);
// prepareFrenchToast(mycallback);


// console.log("After Food Prepared");


// Making it Tricky so know Problem


// console.log("Before Prepare Food");


// function prepareFood(abc) {
//     setTimeout( () => {
//     console.log("Please Prepare Food");
//     abc("Food is ready");
// }, 10);
// }

// function prepareFrenchToast(abc) {
//     setTimeout( () => {
//     console.log("Please Prepare FrenchToast");
//     abc("It's Getting Cold");
// }, 20);
// }

// function prepareCoffee(abc) {
//     setTimeout( () => {
//     console.log("Please Prepare Coffee");
//     abc("Coffee is ready");
// }, 30);
// }

// function mycallback(value){
//     console.log("You may Eat Food as", value)
//     prepareFrenchToast(frenchToastcallback)
// }

// function frenchToastcallback(value){
//     console.log("You may French Toast as", value)
//     prepareCoffee(Coffeecallback);
// }

// function Coffeecallback(value){
//     console.log("Please Take: ", value)
// }

// prepareFood(mycallback); 

// console.log("After Food Prepared");