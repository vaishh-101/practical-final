function SubArray(a,n){
    
    var max_sum = 0
    
    for (var i = 0; i < n - 1; i++)
    
    {
    
    var sum = 0
    
    for (j = i; j < n - 1; j++)
    
    {
    
    sum = sum + a[j]
    
    if (sum > max_sum)
    
    max_sum = sum
    
    }
    
    }
    
    return max_sum
    
    }
    // var a = [-3, 1, -8, 4, -1, 2, 1, -5, 5]
    var a = [1, -2, -3, 4]
    // var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    
    var n = a.length
    console.log("The maximum sum of subarray =", SubArray(a, n))
