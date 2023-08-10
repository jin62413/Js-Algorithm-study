function solution(myString, pat) {
    str = [...myString];
    let answer = str.map((item) => item === 'A' ? item = 'B' : item = 'A').join('');

    if(answer.includes(pat) === true) {
        return 1;
    } else {
        return 0;
    }
}