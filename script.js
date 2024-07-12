var d = new Date();
document.getElementById("dat").innerHTML = d.getFullYear();

console.log("Start");

// Asynchronous operation that takes 2 seconds
setTimeout(function() {
    console.log("Async operation completed");
}, 2000);

console.log("End");