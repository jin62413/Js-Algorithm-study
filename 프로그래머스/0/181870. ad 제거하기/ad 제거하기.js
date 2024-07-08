function solution(strArr) {
    var answer = [];
    answer = strArr.filter((cur) => !cur.includes("ad"))
    return answer;
}