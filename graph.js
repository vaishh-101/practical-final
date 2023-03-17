class Graph{
    constructor(noofvertices){
        this.noofvertices = noofvertices
        this.adjList = new Map()
    }
    addVertex(v){
        this.adjList.set(v,[])
    }
    addEdge(v,w){
        this.adjList.get(v).push(w)
         this.adjList.get(w).push(v)
    }
    // printGraph(){
    //     let key = this.adjList.keys()
    //     for(let v of key){
    //         let eList = this.adjList.get(v)
    //         let data = ''
    //         for(let e in eList){
    //             data = data + eList[e] + ''
    //         }
    //         console.log(v + '=>' +data+'null')
    //     }
    // }
    DFS(v){
        let s = []
        let visited = []
        let keys = this.adjList.keys()
        for(let i of keys)
        {
            visited[i] = false
        }
        s.push(v)
        while(s.length>0)
        {
            let element = s.pop()
            if (!visited[element])
            {
                console.log(element)
                visited[element] = true
            }
            else
            continue
            let eList = this.adjList.get(element)
            for(var i = eList.length-1;i>=0;i--)
            {
                let e = eList[i]
            if(!visited[e]){
                s.push(e)
            }
         } 
    }
    }
    BFS(v){
        let q = []
        let visited = []
        let keys = this.adjList.keys()
        for(let i of keys){
            visited[i] = false
        }
    q.push(v)
        while(q.length>0){
            let element = q.shift()
            visited[element] = true
            console.log(element)
            let eList = this.adjList.get(element)
            for(let i in eList){
                let e = eList[i]
            if(!visited[e]){
                q.push(e)
                visited[e] = true
            }
        }
    }
}
}

    var g = new Graph(4)
    g.addVertex('A')
    g.addVertex('B')
    g.addVertex('C')
    g.addVertex('D')
    g.addEdge('A', 'B')
    g.addEdge('B', 'C')
    g.addEdge('C', 'D')
    g.addEdge('A', 'D')
// g.printGraph()
console.log("BFS Traversal")
g.BFS('A')
 console.log("DFS Traversal")
 g.DFS('A')