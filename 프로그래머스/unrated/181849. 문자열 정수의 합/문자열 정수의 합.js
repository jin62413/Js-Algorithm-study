function solution(num_str) {
    let list = num_str.split('');
    Number(list);
    return list.map(Number).reduce((acc, cur) => acc = acc + cur, 0);
}