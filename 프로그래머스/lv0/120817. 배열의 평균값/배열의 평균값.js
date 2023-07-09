function solution(numbers) {
    var answer = 0;
    let leng = numbers.length;

    for (let i = 0; i < leng; i++) {
        answer += numbers[i];
    }
    return answer = answer / leng;
    
}