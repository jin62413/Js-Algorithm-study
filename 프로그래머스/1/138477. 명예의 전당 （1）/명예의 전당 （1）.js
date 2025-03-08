function solution(k, score) {
    var answer = [];
    let arr = [];

    for(let i = 0; i < score.length; i++) {
        if(i < k) {
            arr.push(score[i]);
        } else {
            if(Math.min(...arr) < score[i]) {
                arr.push(score[i]);
                arr.shift();
            }
        }
        arr.sort((a, b) => a - b);
        answer.push(arr[0])
    }
    return answer;
}