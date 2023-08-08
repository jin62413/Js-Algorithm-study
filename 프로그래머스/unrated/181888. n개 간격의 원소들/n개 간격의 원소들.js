function solution(num_list, n) {
    let answer = [];
    num_list.filter((num, index) => {if(index % n === 0){answer.push(num)}})
    return answer;
}