function solution(left, right) {
    let sum = 0;
    let x = 0;
    for(let j = left; j <= right; j++) {
        for(let i = 1; i <= j; i++) {
            if(j % i === 0) {
                x += 1;
            }
        }
        x % 2 === 0 ? sum += j : sum -= j;
        x = 0;
    }    
    return sum;
}