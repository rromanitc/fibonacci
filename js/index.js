let correctInput = false;
let incoming;
do {
    incoming = parseInt(prompt('Please enter n number of Fibonacci'), 10);
    if (isNaN(incoming) || incoming <= 0) {
        alert('Потрібно ввести натуральне число :)');
        continue;
    }
    correctInput = true;
} while (!correctInput);

function mass_fib_output(n){
    let u = [0, 1];
    for (i=2; i<=n; i++){
        u.push(u[i-1]+u[i-2]);
    }
    return u;
}

document.write("This is yours Fibonacci numbers = " + mass_fib_output(incoming) + '<br>');

function mass_fib(n){
    let u = [0, 1];
    for (i=2; i<=n; i++){
        u.push(u[i-1]+u[i-2]);
    }
    return u[n];
}

document.write("Fibonacci in massiv = " + mass_fib(incoming) + '<br>');

function rec_fib(n) {
  return n <= 1 ? n : rec_fib(n - 1) + rec_fib(n - 2);
}

document.write("Fibonacci recursion = " + rec_fib(incoming) + '<br>'); // 2

function for_fib(n){
    let a = 1, b = 1, c;
    for(i=3; i<=n; i++){
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}

document.write("Fibonacci in for loop = " + for_fib(incoming) + '<br>');

function fibIterative(n) {
  let [a, b] = [1, 0];
  while (n-- > 0) {
    [a, b] = [b + a, a];
  }
  return b;
}

document.write("Fibonacci Iterative = " + fibIterative(incoming) + '<br>');


const fibLine = (n, a = 1, b = 0) => (n === 0) ? b : fibLine(n - 1, a + b, a);

document.write("Fibonacci in Line = " + fibLine(incoming) + '<br>');

function fib_mass(n) {
    let cache = {};
    
    if (n < 1)
        return 0;

    if (n <= 2)
        return 1;
    
    if (n in cache)
        return cache[n];
    
    let value = fib_mass(n- 1) + fib_mass(n - 2);
        
    cache[n] = value;

    return value;
}

document.write("Fibonacci cache = " + fib_mass(incoming) + '<br>');
