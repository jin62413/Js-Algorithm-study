function solution(arr, divisor) {
    let answer = [];
    arr.map((x) => {
        if(x % divisor === 0) {
            answer.push(x)
        }
    });
    
    if(answer.length == '') {
        answer.push(-1);
    }

    answer.sort(function(a, b) {
        return a - b;
    });

    return answer;
}