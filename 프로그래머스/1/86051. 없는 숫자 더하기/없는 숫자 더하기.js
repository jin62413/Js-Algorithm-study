function solution(numbers) {
    let answer = 45 - numbers.reduce((acc, cur) => acc += cur);
    return answer;
}