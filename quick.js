function  partition(a,start,end)
{
    var pivot = a[end]
    var pindex = start
    for(var i = start; i < end; i++)
    {
        if(a[i] <= pivot)
        {
            var t = a[i]
            a[i]= a[pindex]
            a[pindex] = t
            pindex++
        }
    }
    t=a[pindex]
    a[pindex]=a[end]
    a[end]=t
return pindex
}
function quick(a,start,end){
    if(start<end){
        var pindex = partition(a,start,end)
        quick(a,start,pindex-1)
        quick(a,pindex +1,end)
    }
}
var a = [10,89,-7,29,-1]
var n =a.length
var start = 0
var end = n-1
quick(a,start,end)
console.log("After sorting the elements are:")
for(var i = 0;i<n;i++)
console.log(a[i])