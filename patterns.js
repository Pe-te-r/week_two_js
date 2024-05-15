

// Example 1
console.log("Example 1:");
for (let i = 1; i <= 6; i++) {
    console.log("*".repeat(i));
}

// Example 2
console.log("\nExample 2:");
for (let i = 6; i >= 1; i--) {
    console.log("*".repeat(i));
}

// Example 3
console.log("\nExample 3:");
for (let i = 1; i <= 5; i++) {
    console.log(" ".repeat(5 - i) + "*".repeat(i));
}
for (let i = 4; i >= 1; i--) {
    console.log(" ".repeat(5 - i) + "*".repeat(i));
}

// Example 4
console.log("\nExample 4:");
for (let i = 1; i <= 5; i++) {
    console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}
for (let i = 4; i >= 1; i--) {
    console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}

// Example 5
console.log("\nExample 5:");
console.log("*".repeat(7));
for (let i = 2; i <= 7; i++) {
    console.log(" ".repeat(6) + "*");
}

// Example 6
console.log("\nExample 6:");
console.log("*".repeat(7));
for (let i = 2; i <= 7; i++) {
    console.log("*");
}


