//?Awaited<Type>
const promise:Promise<string>=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Done!')
    },1000)
})

type AwaitedType=Awaited<typeof promise>//? here AwaitedType is string
