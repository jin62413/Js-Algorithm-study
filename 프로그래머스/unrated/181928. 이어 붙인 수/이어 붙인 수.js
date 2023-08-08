function solution(num_list) {
    var answer = 0;
    let odd = [];
    let even = [];
    num_list.forEach(function(item){
        if(item % 2 === 1) {       
            odd.push(item);
        } else {
            even.push(item);
        }
    })
    odd = Number(odd.join(''));
    even = Number(even.join(''));

    return odd + even;
}