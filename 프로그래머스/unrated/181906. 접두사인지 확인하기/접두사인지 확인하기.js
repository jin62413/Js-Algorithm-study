function solution(my_string, is_prefix) {
    let length = is_prefix.length;

    if(is_prefix === my_string.slice(0, length)) {
        return 1;
    } else {
        return 0
    };
}