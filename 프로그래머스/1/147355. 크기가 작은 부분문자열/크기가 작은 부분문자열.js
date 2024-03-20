function solution(t, p) {
    var answer = 0;
    let arr = [];
    for(let i = 0; i < t.length - p.length + 1; i++) {
        arr.push(t.substr(i, p.length));
    }
    answer = arr.filter((x) => x <= p).length;

    return answer;
}