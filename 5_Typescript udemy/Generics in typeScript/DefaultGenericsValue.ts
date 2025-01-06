async function fetchData<T=any>(url:string):Promise<T>{//? here by doing T=any we are saying like T=any by default and if you give any type explcitly then it will be overrided by your type.
    const response=await fetch(url);
    const data=await response.json()
    return data
}

async function getData(){
    const data=await fetchData('https://jsonplaceholder.typicode.com/todos/1')//?here type of data is any
    console.log(data)
}
getData()

type Post={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

async function fetchPost(){
    const data=await fetchData<Post>('https://jsonplaceholder.typicode.com/todos/1')//? output doesnot change but our code/typeScript knows what kind of dat is comming.
    console.log(data)
}
fetchPost()
