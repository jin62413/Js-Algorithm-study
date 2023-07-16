function solution(array) {
    let answer = 0;
    let i = Math.floor(array.length/2);
    array.sort(function(a, b)  {
        return a - b;
    });
    answer = array[i];
    // console.log(i);
    // console.log(array)
    return answer;
}