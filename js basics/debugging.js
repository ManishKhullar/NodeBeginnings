//Using Console.trace()

function firstFunction(){
    secondFunction();
}
function secondFunction(){
    thirdFunction();
}
function thirdFunction(){
    console.trace("Here is the stack trace");
}
a();

firstFunction();

function showStackTrace(){
    const error = new Error();
    console.log(error.stack);
}

function a(){
    b();
}

function b(){
    showStackTrace();
}

a();

try{
    // Simulate and error
    someUndefinedFunction();
} catch (error){
    console.error("Error Occured:", error.message);
    console.error("Stack trace", error.stack);
}