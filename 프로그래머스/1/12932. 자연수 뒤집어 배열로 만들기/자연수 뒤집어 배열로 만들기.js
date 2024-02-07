function solution(n) {
    const answer = String(n).split('').reverse().map((x) => +x)
    return answer;
}