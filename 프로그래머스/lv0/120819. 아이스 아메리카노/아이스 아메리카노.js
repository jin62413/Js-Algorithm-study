function solution(money) {
    let answer = [];
    let n = 1;
    let left = 0;
    
    while (money > 0) {
        left = money - (5500 * n);
        
        if(money < 5500) {
            answer.push(0, money);
            break;
        }else if(left < 5500) {
            answer.push(n, left);
            break;
        }
        n++;
    }
    return answer;
}