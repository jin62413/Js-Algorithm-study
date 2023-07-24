function solution(start, end) {
    let answer = [];
    for(let i = 0; i <= start-end; i++) {
        answer.push(start - i);
    }
    return answer;
}