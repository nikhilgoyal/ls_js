let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

function bubbleSort(arr) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] <= arr[i]) continue;
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
}
