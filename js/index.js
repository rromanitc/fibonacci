let incoming = parseInt(prompt('Enter n'));

function rec_fib(n) {
  return n <= 1 ? n : rec_fib(n - 1) + rec_fib(n - 2);
}

document.write("Fibonachi recurthion = " + rec_fib(incoming) + '<br>'); // 2
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// document.write( fib(5) ); // 2
// document.write('<br>');
// document.write( fib(11) ); // 13

function for_fib(n){
    let a = 1, b = 1, c;
    for(i=3; i<=n; i++){
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}

document.write("Fibonachi for = " + for_fib(incoming) + '<br>');



function mass_fib(n){
    let u = [0, 1];
    let r = [];
    for (i=2; i<=n; i++){
        u.push(u[i-1]+u[i-2]);
        console.log(r);
    }

    return u[n];

}

document.write("Fibonachi mass = " + mass_fib(incoming) + '<br>');


function fibIterative(n) {
  let [a, b] = [1, 0];
  while (n-- > 0) {
    [a, b] = [b + a, a];
  }
  return b;
}

document.write("Fibonachi Iterative = " + fibIterative(incoming) + '<br>');


const fibLine = (n, a = 1, b = 0) => (n === 0) ? b : fibLine(n - 1, a + b, a);

document.write("Fibonachi Line = " + fibLine(incoming) + '<br>');




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

document.write("Fibonachi mass = " + fib_mass(incoming) + '<br>');

function fibonacci(number) {

    var sequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    var numberZeroBased = number - 1;

    if (numberZeroBased > sequence.length)
        throw new Error('The number you provided is outside of the range');

    return sequence[numberZeroBased];
};

document.write("Fibonachi mass = " + fibonacci(incoming) + '<br>');


function calculateFibonacciNumbers(max) {  
  var fib = [0, 1]
  for (var i = 2; i < max; i++ ) {
    fib.push( fib[i - 1] + fib[i - 2] )
  }
  var m = fib[max.value];
  return m;
}


document.write("Fibonachi calc = " + calculateFibonacciNumbers(incoming) + '<br>');

