//?pick <Type,Keys>
interface Person{
    name:string;
    age:string;
    address:string;
}

type NameAndAge=Readonly<Pick<Person,"name" |"age">>

const person:NameAndAge={
    name:'prajwol',
    age:'20'
}

// person.name='ram'//? we cannot reassign because readonly utility has been used.