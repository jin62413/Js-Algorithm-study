function solution(x) {
    const answer = true;
    const a = ('' + x).split('').map(Number).reduce((acc, cur) => acc += cur);
    if(x % a === 0) {
        return answer;
    } else {
        return !answer;
    }
}