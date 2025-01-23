function solution(d, budget) {
    
    let result = 0;
    let arr = d.sort((a, b) => {
        return a - b;
    })
    let total = arr[0];
    for(let i= 0; i < arr.length; i++) {
        if (total <= budget) {
            result += 1;
            total += arr[i + 1];
            console.log(total)
        }
    }
    return result
}