function solution(n, t) {
    let i = 1;
    while(i <= t) {
        n *= 2;
        i++;
    }
    return n;
}