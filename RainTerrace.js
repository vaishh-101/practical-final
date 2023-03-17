function RainTerrace(arr, n) {

    var res = 0
    
    for (var i = 1; i < n - 1; i++) {
    
    var left = arr[i]
    
    for (var j = 0; j < i; j++) {
    
    left = Math.max(left, arr[j])
    
    }
    
    var right = arr[i]
    
    for (j = i + 1; j < n; j++) {
    
    right = Math.max(right, arr[j])
    
    }
    
    res += Math.min(left, right) - arr[i]
    
    }
    
    return res
    
    }
    
    // var arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    // var arr = [3,0,2,0,4]
    var arr = [1, 2, 1, 3, 1, 2, 1, 4, 1, 0, 0, 2, 1, 4]
    var n = arr.length
    
    console.log(RainTerrace(arr, n))