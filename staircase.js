function staircase(n ) {

    if (n == 0 || n == 1)
    
    return 1
    
    else if (n == 2)
    
    return 2
    
    else
    
    return staircase(n - 3) + staircase(n - 2) + staircase(n - 1)
    
    }
    
    console.log("The number of ways = ", staircase(9))