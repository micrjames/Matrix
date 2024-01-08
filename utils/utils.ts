exports.dot = (a, b) => a.map((_, i) => a[i] * b[i]).reduce((acc, curr) => acc + curr);
