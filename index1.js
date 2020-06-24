console.log("Before Prepare Food");


function prepareFood(abc) {
    setTimeout( () => {
    console.log("Please Prepare Food");
    abc("Food is ready");
}, 10);
}

function prepareFrenchToast(abc) {
    setTimeout( () => {
    console.log("Please Prepare FrenchToast");
    abc("It's Getting Cold");
}, 20);
}

function prepareCoffee(abc) {
    setTimeout( () => {
    console.log("Please Prepare Coffee");
    abc("Coffee is ready");
}, 30);
}


prepareFood(function (value){
    console.log("You may Eat Food as", value);
    prepareFrenchToast(function (value){
        console.log("You may French Toast as", value);
        prepareCoffee(function (value){
            console.log("Please Take: ", value);
        });
    });
}); 

console.log("After Food Prepared");