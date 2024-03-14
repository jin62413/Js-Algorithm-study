function solution(s) {
    let answer = true;
    if (s.length === 4 || s.length === 6) {
        answer = s.match(/[a-z]/gi) !== null ? false : true;
    } else {
        answer = false;
    }
    return answer;
}