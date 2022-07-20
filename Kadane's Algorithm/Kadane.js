// Largest Sum Contiguous SubArray

let subArraySum = arr => {

    let max = -Infinity;
    let curr = 0;
    for (const i of arr) {
        curr += i;

        if (curr > max) max = curr;
        if (curr < 0) curr = 0
    }

    return max;
}

console.log(subArraySum([1, 5, 8, 2, -6, -2, 5, 3, -5, -2, 9, 8, -3]))