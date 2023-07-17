function solution(n) {
    let answer = n.toString().split('');
    let arr = answer.map(Number);
    let result = arr.reduce((acc, cur) => acc = acc + cur, 0);

    return result;
}