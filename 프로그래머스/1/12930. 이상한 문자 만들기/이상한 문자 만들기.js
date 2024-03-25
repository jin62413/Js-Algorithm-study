function solution(s) {
    let answer = '';
    let s_arr = s.split(' ');
    let arr = new Array(s_arr.length);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = s_arr[i].split('');
        arr[i] = arr[i].map((x, index) => {
            if(index % 2 === 0) {
                return x.toUpperCase();
            } else {
                return x.toLowerCase();
            }
        });
        arr[i] = arr[i].join('');
    }
    answer = arr.join(' ')
    return answer;
}