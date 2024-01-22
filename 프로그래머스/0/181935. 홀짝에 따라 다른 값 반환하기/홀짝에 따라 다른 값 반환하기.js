function solution(n) {
    let answer = 0;
    
    if(n % 2 === 1) {
        for(let i = 1; i <= n; i += 2) {
            answer += i;
        }
        return answer;
    } else {
        for(let i = 2; i <= n; i += 2) {
            const j = i ** 2;
            answer += j;
        }
        return answer;
    }
}