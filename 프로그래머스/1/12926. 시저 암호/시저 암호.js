function solution(s, n) {
    let answer = '';
    let arr = [...s];
    arr = arr.map((x) => {
        x = x.charCodeAt();
        if(x == 32) {
            x = 32;
        } else if(x <= 90) {
            x += n;
            if(x > 90) {
                x -= 26;
                console.log(x)
            }
        } else {
            x += n;
            if(x > 122) {
                x -= 26;
            }
        }
        
        // console.log(x)
        return x = String.fromCharCode(x);
    }).join('');
    
    return arr;
}