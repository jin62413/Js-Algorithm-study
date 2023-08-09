function solution(a, b) {
    let ab = +(String(a)+String(b));
    let ba = +(String(b)+String(a));
    return (ab > ba || ab === ba) ? ab : ba;
}