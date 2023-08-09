function solution(arr) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        let j = 0;
        while(j < arr[i]){
            answer.push(arr[i]);
            j++;
        }
    }
    return answer;
}