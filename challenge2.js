function isFibonacci(number) {
    let a = 0, b = 1;
    while (b < number) {
        [a, b] = [b, a + b];
    }
    return b === number || number === 0;
}

const num = 29; 

if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
}
