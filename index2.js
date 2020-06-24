//#######Promise And Then  with one########
/*
console.log("Before Food Prepaed");

function prepareFood() {
    let prmise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("please Prepare food")
            resolve("Food is ready and warm")
        }, 2000);
    })
    return prmise;
}
let promise = prepareFood();  // We call prepareFood it return promiss
    //console.log("Promise = ", promise);
promise.then(function (abc) {  //then we pass this promiss , this function will be pass in this resolve of foodPrepare
    console.log("Please Eat:", abc);
})
    .catch(function (error) {             // Incase of Reject it will work
         console.log("Error =", error);
    });

console.log("After Food Prepaed");
*/

// #################With two##################
/*
console.log("Before Food Prepaed");

function prepareFood() {
    let prmise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("please Prepare food")
            resolve("Food is ready and warm")
        }, 2000);
    })
    return prmise;
}

function baryani() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("I'm wishing beryani today:")
            resolve("Baryani is ready")
        }, 9000)
    })
    return promise;
}

let promise = prepareFood();
promise.then(function (abc) {
    console.log("Please Eat:", abc);
    return baryani();
})
    .then(function (bar) {
        console.log("Please eat:", bar);
        return samosa();
    })

console.log("After Food Prepaed");
*/

//#############with Three###############

/*

console.log("Before Food Prepaed");

function prepareFood() {
    let prmise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("please Prepare food")
            resolve("Food is ready and warm")
        }, 2000);
    })
    return prmise;
}

function baryani() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("I'm wishing beryani today:")
            resolve("Baryani is ready")
        }, 9000)
    })
    return promise;
}

function samosa() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Gonna need samosa");
            resolve("Samosa is ready :)")
        }, 15000)
    })
    return promise;
}

let promise = prepareFood();
promise.then(function (abc) {
    console.log("Please Eat:", abc);
    return baryani();
})
    .then(function (bar) {
        console.log("Please eat:", bar);
        return samosa();
    })
    .then(function(sam){
        console.log("Samosa is Ready",sam);
    })

console.log("After Food Prepaed");

*/









/*
console.log("Before Prepare Food");

function prepareFood() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Please Prepare Food");
            resolve("Food is ready");
        }, 10);
    });
    return promise;
}

let promise = prepareFood ();    // We call prepareFood it return promiss
//console.log("Promise = ", promise);

promise.then(function (value){     //then we pass this promiss , this function will be pass in the resolve of foodPrepare
    console.log("Food is ready callback =", value);
    return prepareFrenchToast();  // after that we call Frenchtoast, this will also return promiss
})

.catch(function (error) {
    console.log("Error =", error);
});


console.log("After Food Prepared");
*/


//###########################################
//###########################################

/*
console.log("Before Prepare Food");

function prepareFood(data) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (data !== 2) {
                console.log("Please Prepare Food");
                resolve("Food is ready");
            }
            else{
                reject("Value not Acceptable");   // Value not Acceptable
            }
        }, 10);
    });
    return promise;
}

function prepareFrenchToast() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Please Prepare FrenchToast");
            resolve("It's Getting Cold");
        }, 20);
    });
    return promise;
}

function prepareCoffee() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Please Prepare Coffee");
            resolve("Coffee is ready");
        }, 30);
    });
    return promise;
}

let promise = prepareFood(2);    // We call prepareFood it return promiss
//console.log("Promise = ", promise);

promise.then(function (value) {     //then we pass this promiss , this function will be pass in this resolve of foodPrepare
    console.log("Food is ready callback =", value);
    return prepareFrenchToast();  // after that we call Frenchtoast, this will also return promiss
})
    .then(function (frenchToastValue) {  // Frenchtoast will pass this in the resolve of Frenchtoast
        console.log("French Toast is ready callback", frenchToastValue);
        return prepareCoffee();
    })
    .then(function (coffeeValue) {       // Similarly for Coffee.
        console.log("Coffee is ready", coffeeValue);
    })
    .catch(function (error) {
        console.log("Error =", error);
    });

// prepareFood(function (value) {
//     console.log("You may Eat Food as", value);
//     prepareFrenchToast(function (value) {
//         console.log("You may French Toast as", value);
//         prepareCoffee(function (value) {
//             console.log("Please Take: ", value);
//         });
//     });
// });

console.log("After Food Prepared");
*/