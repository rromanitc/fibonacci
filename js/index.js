let incoming = parseInt(prompt('Enter n'));

function mass_fib_output(n){
    let u = [0, 1];
    for (i=2; i<=n; i++){
        u.push(u[i-1]+u[i-2]);
    }
    return u;
}

document.write("This is yours Fibonachi numbers = " + mass_fib_output(incoming) + '<br>');

function mass_fib(n){
    let u = [0, 1];
    for (i=2; i<=n; i++){
        u.push(u[i-1]+u[i-2]);
    }
    return u[n];
}

document.write("Fibonachi in massiv = " + mass_fib(incoming) + '<br>');

function rec_fib(n) {
  return n <= 1 ? n : rec_fib(n - 1) + rec_fib(n - 2);
}

document.write("Fibonachi recurthion = " + rec_fib(incoming) + '<br>'); // 2

function for_fib(n){
    let a = 1, b = 1, c;
    for(i=3; i<=n; i++){
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}

document.write("Fibonachi in for loop = " + for_fib(incoming) + '<br>');

function fibIterative(n) {
  let [a, b] = [1, 0];
  while (n-- > 0) {
    [a, b] = [b + a, a];
  }
  return b;
}

document.write("Fibonachi Iterative = " + fibIterative(incoming) + '<br>');


const fibLine = (n, a = 1, b = 0) => (n === 0) ? b : fibLine(n - 1, a + b, a);

document.write("Fibonachi in Line = " + fibLine(incoming) + '<br>');

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

document.write("Fibonachi cache = " + fib_mass(incoming) + '<br>');

function fibonacci(n) {

    var sequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    var numberZeroBased = n - 1;

    if (numberZeroBased > sequence.length)
        throw new Error('The number you provided is outside of the range');

    return sequence[numberZeroBased];
};

document.write("Fibonachi with limites massiv = " + fibonacci(incoming) + '<br>');

