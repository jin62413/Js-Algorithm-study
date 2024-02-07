function solution(s){
    let answer = true;
    const p = s.match(/p/ig);
    const y = s.match(/y/ig);
    if(p === null && y === null) {
        return answer
    } else if(p === null || y === null) {
        return !answer
    } else if(p.length === y.length) {
        return answer
    } else if(p.length !== y.length) {
        return !answer
    }
}