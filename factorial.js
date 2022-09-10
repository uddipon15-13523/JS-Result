//fromula n!=n*(n-1)*(n-2)*...*1
function paul(n) {
    let result = 1;
    let i = n;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
console.log(paul(5));