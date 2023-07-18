function solution(numbers, n) {
    
    let answer = 0;
    answer = numbers.reduce((acc, cur) => {
        if (acc <= n) acc = acc + cur;
        else acc;
        return acc;
    }, 0);
    return answer;
}