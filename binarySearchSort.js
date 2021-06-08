import binarySearch from "binarySearch";

export default binarySearchSort(arr) {
  for (let i=1; i<arr.length; i++) {
    arr = binarySearch(arr[i],arr.slice(0,i)).concat(arr.slice(i+1,arr.length));
  }
}
