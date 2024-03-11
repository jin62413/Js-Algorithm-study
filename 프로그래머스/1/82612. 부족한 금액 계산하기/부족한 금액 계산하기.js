function solution(price, money, count) {
    let answer = -1;
    let need = 0;
    
    for(let i = 1; i <= count; i++) {
        need += price * i;
    }
    answer = need > money ? need - money : 0;

    return answer;
}