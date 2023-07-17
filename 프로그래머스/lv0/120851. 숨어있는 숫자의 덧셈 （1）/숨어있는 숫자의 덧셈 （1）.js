function solution(my_string) {
    let answer = 0;
    let arr = my_string.toString().split('');
    console.log(arr);
    for(element of arr) {
        if(!isNaN(element)) {
            console.log(element);
            answer += Number(element);
        } else {
            continue;
        }
    }
    return answer;
}