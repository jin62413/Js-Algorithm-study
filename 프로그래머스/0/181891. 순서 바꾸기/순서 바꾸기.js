function solution(num_list, n) {
    const answer = num_list.slice(n).concat(num_list.slice(0, n));
    return answer;
}