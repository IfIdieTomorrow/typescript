function sum(a, b) {
    console.log(Array.from(arguments));
    return a + b;
}

sum(10, 20, 30, 40, 50);
