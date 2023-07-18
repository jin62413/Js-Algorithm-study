function solution(arr, k) {
    let answer = [];
    if (k % 2 == 1) {
        answer = arr.map((item) => item * k);
    } else {
        answer = arr.map((item) => item + k);
    }
    return answer;
}