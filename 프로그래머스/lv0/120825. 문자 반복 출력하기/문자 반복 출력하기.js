function solution(my_string, n) {
    let arr = my_string.split('');
    let answer = arr.reduce((acc, cur) => acc + cur.repeat(n), '');
    return answer;
}