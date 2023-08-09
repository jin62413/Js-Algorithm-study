function solution(rsp) {
    let answer = '';
    [...rsp].map((item) => {
        switch(item) {
            case '2':
                answer += '0';
                break;
            case '0':
                answer += '5';
                break;
            case '5':
                answer += '2';
                break;
        }
    }).join('');
    return answer;
}