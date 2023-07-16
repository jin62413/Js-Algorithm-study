function solution(slice, n) {
    let answer = Math.floor(n / slice);
    if(n % slice > 0) {
        answer += 1;
    }
    return answer;
}