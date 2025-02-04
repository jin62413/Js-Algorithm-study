function solution(numbers, target) {
    let answer = 0;
    
    dfs(0, 0); // 초깃값 설정
    
    function dfs(index, sum) {
        if(index == numbers.length) {
            if(sum == target) {
                answer++;
            }
            return;
        }
        
        // +1일때 먼저 탐색, 끝까지 탐색 후 -1하며 앞으로 감, 가면서 뒤에 숫자 나오면 다시 그쪽으로 이동
        // (+1, +1, +1, +1, +1) -> (+1, +1, +1, +1, -1) -> (+1, +1, +1, -1, +1) -> (+1, +1, +1, -1, -1)...
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    return answer;
}