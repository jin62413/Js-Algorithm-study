function solution(a, b, n) {
    var answer = 0;
    while (n >= a) {
        let change = Math.floor(n / a) * b;
        answer += change;
        n = change + (n % a);
    }
    
    return answer;
}