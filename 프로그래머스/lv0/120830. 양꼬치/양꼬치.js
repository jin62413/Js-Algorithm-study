function solution(n, k) {
    var total = 0;
    
    total = (12000 * n) + (2000 * k) - (parseInt(n/10)*2000);
    
    return total;
}