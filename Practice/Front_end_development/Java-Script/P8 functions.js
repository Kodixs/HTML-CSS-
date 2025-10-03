// ===============================
// 📌 FUNCTIONS IN JAVASCRIPT
// ===============================

// 1. Function Declaration (normal function)
function greet() {
    console.log("Hello, World!");
}
greet(); // ✅ Hello, World!

// 2. Function with Parameters and Return
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // ✅ 8

// 3. Function with Default Parameter
function welcome(name = "Guest") {
    return "Welcome " + name;
}
console.log(welcome());        // ✅ Welcome Guest
console.log(welcome("Utkarsh")); // ✅ Welcome Utkarsh

// 4. Function Expression (function stored in a variable)
const multiply = function (x, y) {
    return x * y;
};
console.log(multiply(4, 5)); // ✅ 20

// 5. Arrow Function (short, modern syntax)
const square = (n) => n * n;
console.log(square(6)); // ✅ 36

// 6. Anonymous Function (no name, often used in callbacks)
setTimeout(function () {
    console.log("✅ This runs after 2 seconds");
}, 2000);

// 7. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("✅ I run automatically!");
})();

// 8. Function Returning Another Function (Closure Example)
function outer() {
    return function inner() {
        return "Hello from inner function!";
    };
}
let message = outer();
console.log(message()); // ✅ Hello from inner function!

// 9. Higher Order Function (functions as arguments)
function operate(a, b, func) {
    return func(a, b);
}
let sum = operate(5, 3, (x, y) => x + y);
let product = operate(5, 3, (x, y) => x * y);
console.log(sum);     // ✅ 8
console.log(product); // ✅ 15

// 10. Recursive Function (calls itself)
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // ✅ 120

// 11. Function as Object Method
let person = {
    name: "Utkarsh",
    sayHello: function () {
        return "Hello, my name is " + this.name;
    }
};
console.log(person.sayHello()); // ✅ Hello, my name is Utkarsh

// 12. Constructor Function (used with `new`)
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
let myCar = new Car("Toyota", "Fortuner");
console.log(myCar.brand, myCar.model); // ✅ Toyota Fortuner

// 13. Generator Function (yield values one by one)
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = numberGenerator();
console.log(gen.next().value); // ✅ 1
console.log(gen.next().value); // ✅ 2
console.log(gen.next().value); // ✅ 3

// 14. Async Function (for promises & async/await)
async function fetchData() {
    return "✅ Data fetched!";
}
fetchData().then(result => console.log(result));

// ===============================
// END OF FUNCTION CHEAT SHEET
// ===============================


let numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
    console.log(num);  
});
// ✅ 1
// ✅ 2
// ✅ 3
// ✅ 4
