function solution(my_string) {
    let arr = [];
    [...my_string].map(item => (item.match(/[A-Z]+/g) !== null) ? arr.push(item.toLowerCase()) : arr.push(item.toUpperCase()));
    return arr.join('');
}