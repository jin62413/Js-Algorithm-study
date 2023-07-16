function solution(array, height) {
    var answer = 0;
    for(let element of array) {
        if(element > height) {
            answer += 1;
        }
    }
    return answer;
}