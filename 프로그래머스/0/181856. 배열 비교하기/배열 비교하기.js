function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length > arr2.length) {
        answer = 1;
    } else if(arr1.length < arr2.length) {
        answer = -1;
    } else {
        const x = arr1.reduce((acc, cur) => acc += cur);
        const y = arr2.reduce((acc, cur) => acc += cur);
        if(x > y) {
            answer = 1;
        } else if(x < y) {
            answer = -1;
        } else {
            answer = 0;
        }
    }
    return answer;
}