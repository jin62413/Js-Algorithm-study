function solution(sides) {
    sides.sort(function(a, b) {
        return b - a;
    });
    
    let answer = (sides[0] < sides[1] + sides[2]) ? 1 : 2;
    
    return answer;
}