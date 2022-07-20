// Number of subarrays having sum exactly equal to k

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

console.log(subArrayEqualK([10, 2, -2, -20, 10], -10))