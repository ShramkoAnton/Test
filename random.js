function randWD(n) {
    return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 10)) );
}
a = randWD(6);
console.log(a);