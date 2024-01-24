function solution(a, b) {
    const foo = +(String(a) + String(b));
    const bar = 2 * a * b;

    if (foo > bar) {
        return foo;
    } else if (foo < bar) {
        return bar;
    } else {
        return foo;
    }
}