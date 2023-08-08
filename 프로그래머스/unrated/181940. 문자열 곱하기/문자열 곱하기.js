function solution(my_string, k) {
    let answer = '';
    let i = 1;
    while(i <= k) {
        answer += my_string;
        i++;
    }
    return answer;
}