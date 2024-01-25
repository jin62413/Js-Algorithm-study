function solution(arr, n) {
    const leng = arr.length;
    if(leng % 2 === 1) {
        for(let i = 0; i < leng; i+=2) {
            arr[i] = arr[i] + n;
        }
        return arr;
    } else {
        for(let i = 1; i < leng; i+=2) {
            arr[i] = arr[i] + n;
        }
        return arr;
    }
}