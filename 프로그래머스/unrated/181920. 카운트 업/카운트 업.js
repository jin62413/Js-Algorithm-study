function solution(start, end) {
    let answer = [];
    let n = end - start;
    let i = 0;
    
    do {
        answer[i] = start + i;
        i++;
    } while (i <= n);
    return answer;
}