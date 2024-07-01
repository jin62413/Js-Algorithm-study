function solution(array) {
    var answer = [];
    let x = Math.max(...array);
    let y = array.indexOf(x);
    answer.push(x, y);
    return answer;
}