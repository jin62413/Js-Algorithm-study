function solution(n) {
    const arr = Array.from('' + n).sort((a, b) => {return b - a;}).join('');

    return +arr;
}