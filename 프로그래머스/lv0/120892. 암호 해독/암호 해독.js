function solution(cipher, code) {
    let answer = '';
    let arr = [];
    [...cipher].filter((item, index) => (index + 1) % code === 0 ? arr.push(item) : false);
    answer = arr.join('');
    
    return answer;
}