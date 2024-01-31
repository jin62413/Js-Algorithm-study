function solution(arr, delete_list) {
    for(const x of delete_list) {
        arr = arr.filter((y) => y !== x);
    }
    return arr;
}