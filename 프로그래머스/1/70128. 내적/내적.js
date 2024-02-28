function solution(a, b) {
    let answer = 0;
    answer = a.map((x, i) => x * b[i]).reduce((acc, cur) => acc + cur);
    //for (let i = 0; i < a.length; i++) {
    //    answer += a[i] * b[i];
    //}
    return answer;
}