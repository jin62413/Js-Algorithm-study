function solution(num) {
    let answer = 0;
    let i = 0;
    while(i < 500) {
        if(num === 1) {
            answer = i;
            break;
        } else if(num % 2 === 1) {
            num = num * 3 + 1;
        } else if(num % 2 === 0) {
            num = num / 2;
        }
        i++;
    }
    if(i === 500) {
        answer = -1;
    }
    return answer;
}