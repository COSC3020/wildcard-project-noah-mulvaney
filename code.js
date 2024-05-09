// COSC3020 Wildcard Project
// Approaches to the Fibonacci sequence
// Noah Mulvaney
// 8 May 2024

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

// Timing
//      Referenced https://www.tutorialspoint.com/finding-the-time-elapsed-in-javascript
function time(impl, n) {
    let start = new Date();
    impl(n);
    let end = new Date();
    return end - start;
}

for (let n = 1; n < 2**36; n *= 2) {
    if (n < 2**6) console.log("Fib", n, time(fib, n));
    if (n < 2**13) console.log("TR Fib", n, time(TRFib, n));
    if (n < 2**15) console.log("RM Fib", n, time(RMFib, n));
    console.log("Iter Fib", n, time(iterFib, n));
    console.log("Closed Fib", n, time(closedFib, n));
}

console.log("Done!");
