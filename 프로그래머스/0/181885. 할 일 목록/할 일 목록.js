function solution(todo_list, finished) {
    const answer = todo_list.filter((x, i) => {
        if(finished[i] === false) {
            return x;
        }
    })
    return answer;
}