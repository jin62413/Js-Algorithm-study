function solution(num_list) {
    var answer = [...num_list];
    let i = num_list.length - 1;
    console.log(i)
    if(num_list[i] > num_list[i-1]) {
        answer.push(num_list[i] - num_list[i-1]);
    } else {
        answer.push(num_list[i] * 2);
    }
    return answer;
}