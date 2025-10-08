let colors = ["Red", "Green", "Blue"];

// pop() → removes last element
let last = colors.pop();
console.log(last);      // Blue
console.log(colors);    // ["Red", "Green"]

// shift() → removes first element
let first = colors.shift();
console.log(first);     // Red
console.log(colors);    // ["Green"]

// unshift() → adds element at start
colors.unshift("Yellow");
console.log(colors);    // ["Yellow", "Green"]
