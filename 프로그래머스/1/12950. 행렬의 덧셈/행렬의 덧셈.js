function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        let result = [];
        for(let j = 0; j < arr2[i].length; j++) { //0번째 배열의 길이 만큼
            result.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(result); 
    }   
    return answer;
}