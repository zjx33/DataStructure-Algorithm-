function compose(...fns) {
    return function (x) {
        fns.reverse().reduce((arg, fn) => {
            return fn(arg)
        }, x)
    }
}
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1));