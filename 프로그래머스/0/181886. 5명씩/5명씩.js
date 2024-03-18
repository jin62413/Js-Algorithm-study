function solution(names) {
    var answer = [];
    const x = Math.floor(names.length / 5);
    
    //answer.push(names[0]);
    
    //let i = 1;
    //while (i <= x) {
    //    answer.push(names[i*5]);
    //    i++;
    //}
    
    names.filter((x, index) => {
        if(index % 5 === 0) {
            answer.push(x);
        }
    })
    
    return answer;
}