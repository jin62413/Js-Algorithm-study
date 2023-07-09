function solution(n) {
    var answer = 0;
    let pizza = parseInt(n / 7);
    
    if (n % 7 !== 0) {
        pizza += 1;
    }
    
    return pizza;
}