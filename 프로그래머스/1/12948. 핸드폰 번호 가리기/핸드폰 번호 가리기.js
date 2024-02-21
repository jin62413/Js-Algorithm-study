function solution(phone_number) {
    let answer = '';
    const x = phone_number.slice(-4);
    answer = phone_number.substring(0, phone_number.length - 4).replaceAll(/[0-9]/g, '*') + x;

    return answer;
}