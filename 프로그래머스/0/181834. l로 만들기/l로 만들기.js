function solution(myString) {
    var answer = '';
    let arr = myString.split('');
    arr = arr.map((cur) => {
        return cur.charCodeAt() < 'l'.charCodeAt() ? cur = 'l' : cur;
    });
    answer = arr.join('');
    return answer;
}