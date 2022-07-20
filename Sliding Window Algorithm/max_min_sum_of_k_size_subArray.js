// Max/Min sum of K size of Sub Array

let sumOfSubArray = (arr, k) => {

    let total = arr.reduce((a, b) => a + b);
    let max = total;

    for (let i = 0; i < arr.length - k; i++) {

        total -= arr[i] + arr[i + k];
        max = Math.max(max, total)
    }
    return max;
}

console.log(sumOfSubArray([1, 4, 2, -4, 9, 11, -4, 6, 3, -2, 7], 4));