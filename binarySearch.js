export default function binarySearch(elm, arr) {
    const n = arr.length;
    let [lower, upper] = [0, n];
    let i = Math.floor(n/2);
    let arrI;
    for (let count=0; count<Math.ceil(Math.log2(n)); count++) {
        arrI = arr[i];
        if (arrI < elm) {
            lower = i;
            i = Math.floor((lower + upper) / 2);
        }
        else if (arrI > elm) {
            upper = i;
            i = Math.floor((lower + upper) / 2);
        }
        else break;
    }
    const cutoff = arr[i] < elm ? i+1 : i;
    return arr.slice(0,cutoff).concat(elm).concat(arr.slice(cutoff,n));
}
