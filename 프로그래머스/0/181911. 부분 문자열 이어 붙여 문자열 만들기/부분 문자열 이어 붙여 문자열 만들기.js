function solution(my_strings, parts) {
    var answer = '';
    answer = my_strings.map((cur, i) => cur.substring(parts[i][0], parts[i][1]+1)).join('')
    return answer;
}