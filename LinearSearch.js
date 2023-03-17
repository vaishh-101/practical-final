function LinearSearch(arr,key){
    for(let i=0; i<arr.length;i++){
        if(arr[i]===key){
            return i
        }
    }
    return -1

}

var a = [80, 45, 70, 40, 35, 50]

i = LinearSearch(a, 80)

if (i == -1)

console.log("element is not in the list")

else

console.log("element is present at position", i)
