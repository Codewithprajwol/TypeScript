//? let's see how we can use generic in objects.

type objeGeneric<K,V>={
    key:K,
    value:V
}

const object1:objeGeneric<number,string>={
    key:1234,
    value:'hello'
}

const object2:objeGeneric<string,number[]>={
    key:'hi',
    value:[1,3,4,5,6]
}

//? here we can use constraints in object as well ...here's how

type HasId={
    id:number
}

function printId<T extends HasId>(obj:T):void{
    console.log(obj.id)
}

const user={
    id:12,
    name:'Prajwol from Bhanjyang'
}
const product={
    name:"laptop"
}

printId(user)
printId({id:12,name:"hello"})//?here id must be there
printId(product)//? here it says id should be decleared here


