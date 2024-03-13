function solution(s) {
    let answer = '';
    let even = Math.trunc(s.length / 2);
    let arr = s.split('');
    answer = s.length % 2 ? arr[even] : arr[even - 1] + arr[even];
    return answer;
}