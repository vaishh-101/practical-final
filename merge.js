function merge(arr,low,mid,high) {
    var i,j,k,b=[]
    i= low //initial index of first subarray
    j= mid+1  // initial indexx of second subarray
    k=low  //initial index of merged subarray
    while(i<=mid && j<=high) {
        if(arr[i]<=arr[j]) {
            b[k] = arr[i]
            i++

        }
        else {
            b[k]=arr[j]
            j++
        }
        k++
    }

 // copy thee remaining elements of left subarray, if there are any
    while(i<=mid) {
    b[k]=arr[i]
    i++
    k++
    }

 //copy the remaining elements of right subarray, if there are any
    while(j<=high) {
        b[k] = arr[j]
        j++
        k++
    }
    
    for(k=low; k<=high; k++)
    arr[k] = b[k]

}

function mergeSort(arr, low,high){
    if(low<high){
        var mid = Math.floor((low + high)/2)
        mergeSort(arr,low,mid)
        mergeSort(arr,mid+1,high)
        merge(arr,low,mid,high)
    }
}

function printArray(A, size) {
    var i
    for(i=0; i<size; i++)
    console.log(A[i])

}

var arr = [30, 50, 20, 11, 34, 89, 70]
var arr_size = arr.length
console.log("Given arrray is")
printArray(arr,arr_size)

mergeSort(arr,0,arr_size-1)
console.log("Sorted array is")
printArray(arr,arr_size)