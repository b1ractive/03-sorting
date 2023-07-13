function split(wholeArray) {
  /* tu código acá para definir el firstHalf y secondHalf array */
  if (wholeArray.length % 2 == 0) {
    firstHalf = wholeArray.slice(0, wholeArray.length / 2);
    secondHalf = wholeArray.slice(wholeArray.length / 2, wholeArray.length);
  } else {
    firstHalf = wholeArray.slice(0, wholeArray.length / 2 + 1);
    secondHalf = wholeArray.slice(wholeArray.length / 2 + 1, wholeArray.length);
  }

  return [firstHalf, secondHalf];
}

function merge(arr1 = [], arr2 = []) {
  let newArr = [];

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      let actualValue = arr1.shift();
      newArr.push(actualValue);
    } else {
      let actualValue = arr2.shift();
      newArr.push(actualValue);
    }
  }
  return newArr;
}

function mergeSort(array = []) {
  /*let [mitad1, mitad2] = split(array);

  let [mitad3, mitad4] = split(mitad1);
  let [mitad5, mitad6] = split(mitad2);
  let [mit1, mit2] = split(mitad3);
  let [mit3, mit4] = split(mitad4);
  let [mit5, mit6] = split(mitad5);
  let [mit7, mit8] = split(mitad6);

  let testMerge = merge(mit1, mit2);
  console.log(testMerge);*/
}
