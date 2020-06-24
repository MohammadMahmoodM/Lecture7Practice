console.log("Before Prepare the food");

function prepareFood() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Please Prepare the food:")
            resolve("Come Food is ready")
        }, 5000)
    })
    return promise;
}


let promise = prepareFood();
console.log("What is the value of promiss:", promise)

promise.then(function(abc) {
    console.log("abc value:", abc)
}  )




console.log("After Prepare the food");