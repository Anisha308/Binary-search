function bsearch(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    var mid = Math.floor((start + end) / 2)
    while (start <= end ) {
        if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid=Math.floor((start+end)/2)
        
    }
    if (arr[mid] === target) {
        return mid;
    } else {
        return -1;
}

}
console.log(bsearch([2, 3, 4, 5, 6, 7, 8], 8 ));








