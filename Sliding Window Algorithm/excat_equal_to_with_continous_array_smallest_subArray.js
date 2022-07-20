// Number of subarrays having sum exactly equal to k

// O(n^2) time complexity
let subArrayEqualK = (arr, k) => {
    let j = 0;
    let val;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        val = i;
        while (val < arr.length) {
            sum += arr[val];
            if (sum == k) j++;
            val++;
        }
    }
    return j;
}


// O(n) time complexity with hashing
let subArrayEqualKBetter = (arr, k) => {

    const obj = {};
    let res = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];
        if (sum == k) res++;

        if (obj[sum - k]) res += obj[sum - k];

        obj[sum] ? obj[sum] += 1 : obj[sum] = 1;
    }
    return res;
}

console.log(subArrayEqualK([10, 2, -2, -20, 10], -10))
console.log(subArrayEqualKBetter([10, 2, -2, -20, 10], -10))

