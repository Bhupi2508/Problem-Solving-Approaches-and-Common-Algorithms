// Find the smallest subarray length whose sum of elements is greater than `k`

let smallestSubArray = (arr, k) => {

    let sum = 0;
    let j = 0;
    let jSize = Infinity;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        while (sum >= k) {
            jSize = Math.min(jSize, i - j + 1);
            sum -= arr[j];
            j++;
        }
    }
    return jSize === Infinity ? 0 : jSize;
}

console.log(smallestSubArray([1, 2, 3, 4, 5, 6, 7, 8], 7))