function split (wholeArray) {
  var middle = Math.floor(wholeArray.length/2);
  var firstHalf = wholeArray.slice(0, middle);
  var secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf]
}


function merge (left, right) {
  var outArr = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) outArr.push(left.shift())
      else outArr.push(right.shift())
    }
    else {
      if (left.length) {
        outArr = outArr.concat(left);
        break;
      }
      else {
        outArr = outArr.concat(right);
        break;
      }
    }
  }
  return outArr;
}


function mergeSort (array) {
  if (array.length < 2) return array
  var splitArr = split(array);
  return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]))
}
