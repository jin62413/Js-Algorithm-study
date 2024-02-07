function solution(n)
{
    let answer = String(n).split('').map((cur) => Number(cur)).reduce((acc, cur) => acc += cur);
    return answer;
}