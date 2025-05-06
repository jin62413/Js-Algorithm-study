function solution(food) {
    var answer = '';
    let arr = [0];
    for(let i = food.length - 1; i > 0; i--) {
        for(let j = Math.floor(food[i] / 2); j > 0; j--) {
            arr.unshift(Math.floor(i));
            arr.push(Math.floor(i));
        }
    }
    answer = arr.join('')
    return answer;
}