function solution(numbers) {
    let answer = 0;
    numbers.sort((a, b) => a - b);
    let max1 = numbers[0] * numbers[1];
    let max2 = numbers[numbers.length-1] * numbers[numbers.length-2];

    answer = Math.max(max1, max2);
    return answer;
}