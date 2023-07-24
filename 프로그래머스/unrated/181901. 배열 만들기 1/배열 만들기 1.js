function solution(n, k) {
    let answer = [];
    for(let i = 1; i <= n; i++) {
        let num = 1;
        num = i * k;
        answer.push(num);
    }
    let result = answer.filter(value => value <= n);
    return result;
}