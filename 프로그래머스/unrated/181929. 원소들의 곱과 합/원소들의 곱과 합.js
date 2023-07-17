function solution(num_list) {
    let answer = 0;
    let mul = num_list.reduce((acc, cur) => acc * cur);
    let sub = num_list.reduce((acc, cur) => acc + cur);
    
    if (mul < (sub*sub)) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}