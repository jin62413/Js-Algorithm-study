function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        if(a.charAt(n) > b.charAt(n)) {
            return 1;
        }
        
        if(a.charAt(n) == b.charAt(n)) {
            return (a > b ? 1 : -1);
        }
        
        if(a.charAt(n) < b.charAt(n)){
            return -1;   
        }
    })
    return answer;
}