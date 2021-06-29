let LowerValue = 0;
function binarySearch(array, keyValue) {
  let HigherValue = array.length - 1;
  while (LowerValue <= HigherValue) {
    let middle = Math.floor((LowerValue + HigherValue) / 2);
    if (array[middle] === keyValue) {
      return middle;
    } else if (array[middle] < keyValue) {
      LowerValue = middle + 1;
    } else {
      HigherValue = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 3))
//output:3
