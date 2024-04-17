// COSC3020 Wildcard Project
// Approaches to the Fibonacci sequence
// Noah Mulvaney
// 17 Apr 2024

// Ordinary recursive implementation
function fib(n) {
    if (n < 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// Tail recursive implementation
function TRFib(n, sum = 1, old = 1) {
    if (n < 2) return sum;
    return TRFib(n - 1, sum + old, sum);
}

// Recursive memorization implementation
//      Adapted from Dynamic Programming slide 7
let fibSolns = [];
fibSolns[0] = 1;
fibSolns[1] = 1;
function RMFib(n) {
    if (fibSolns[n] == undefined)
        fibSolns[n] = RMFib(n - 1) + RMFib(n - 2);
    return fibSolns[n];
}

// Iterative top-down implementation
//      Adapted from Dynamic Programming slide 6
function iterFib(n) {
    let old = 1;
    let fib = 1;
    
    for (let i = n; i > 1; --i) {
        let tmp = fib;
        fib += old;
        old = tmp;
    }

    return fib;
}

// Closed form implementation
//      Based on discussion of linear recurences in MATH3700
function closedFib(n) {
    const gr = (1 + Math.sqrt(5)) / 2; // Golden ratio
    const gc = (1 - Math.sqrt(5)) / 2; // Conjugate of golden ratio
    
    // Must round value due to floating point precision errors for large n
    return Math.floor((gr**(n + 1) - gc**(n + 1)) / Math.sqrt(5)); 
}

/*
// Debug
for (let i = 0; i < 15; ++i) {
    console.log(fib(i), TRFib(i), RMFib(i), iterFib(i), closedFib(i));
}
*/
