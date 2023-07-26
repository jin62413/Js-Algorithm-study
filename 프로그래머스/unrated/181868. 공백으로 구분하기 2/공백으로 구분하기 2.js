function solution(my_string) {
    return my_string.replace(/ +/g, ' ').trim().split(' ');
}