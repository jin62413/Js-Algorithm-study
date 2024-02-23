function solution(arr) {
    var answer = [];
    let a = Math.min(...arr);
    answer = arr.filter((x) => x !== a);
    if(answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}