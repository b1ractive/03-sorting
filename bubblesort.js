function bubbleSort(arr) {
  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, num1, num2) {
  let temporal = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temporal;
}
