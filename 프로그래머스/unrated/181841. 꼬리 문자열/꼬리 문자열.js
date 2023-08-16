function solution(str_list, ex) {
    let arr = str_list.filter((item) => item.includes(ex) === false).join('');
    return arr;
}