function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.map((item, index) => { index % 2 === 0 ? odd += item : even += item });
    return Math.max(odd, even);
}