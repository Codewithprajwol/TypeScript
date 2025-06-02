async function fetchData<T>(url:string):Promise<T>{

    const response=await fetch(url);
    const data=await response.json();
    return data


}


type Post={
    userId:number;
    id:number;
    title:string;
    completed:boolean
}



const  getData=async()=>{
    
    const todoData=await fetchData<Post>('https://jsonplaceholder.typicode.com/todos/1');
    return todoData
}

(async () => {
  const todoData = await getData();
  console.log(todoData);
})();