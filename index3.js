// ##############async and await#########
console.log("Before Everthing");

const food = () => {
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("I'm need food");
            resolve("Food is Ready");
        }, 50)
    })
    return promise;
}

async function startProcess() {
    let ready = await food();
    console.log("ready = ", ready)
}

startProcess();

console.log("After Everthing");