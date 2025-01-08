//? what you have to know is if some properites is defined under the abstract class then each child class should have to implement that properties manditorly.


type Holidays={
    date:Date,
   reason:string,
}[];
// type hol={
//     date:Date,
//    reason:string,
// };
abstract class Department{
    protected abstract holidays:Holidays;
     protected constructor(protected name:string){
    }
    public addHolidays(holidays:Holidays){
      if(Array.isArray(holidays)){
        for(const holiday of holidays){
           this.holidays.push(holiday)
        }
      }
    }
    protected abstract printHolidays():void;
 
}

class ItDepartment extends Department{
  public constructor(){
    super("itDepartment")
  }
  protected holidays:Holidays=[]
  public printHolidays(){
    if(this.holidays.length===0){
      return console.log('this in no holidays data in this particular department object')
    }
    console.log(`This is the holidays for ${this.name}`)
    this.holidays.forEach(({date,reason},index:number)=>{
        console.log(`date is ${date} and reason is ${reason}`)
    })
  }
} 

class adminDepartment extends Department{
  protected holidays:Holidays=[];
  constructor(){
    super("adminDepartment")
    
  }
  public printHolidays(){
    if(this.holidays.length===0){
      return console.log('this in no holidays data in this particular department object')
    }
    console.log(`This is the holidays for ${this.name}`)
    this.holidays.forEach(({date,reason},index:number)=>{
        console.log(`date is ${date} and reason is ${reason}`)
    })
  }
}
// const itDepartment:ItDepartment=new ItDepartment("it Department")
// const accountDepartment:ItDepartment=new  ItDepartment('accout department')//? this is not what we want like this that the reason we make the Department constructor protected.

// const itDepartment:ItDepartment=new ItDepartment()//?oh now let me tell you ...what i have understand when parent constructor is proteced and i have a extend child class of parent class but that child doesnot have it's own constructor then since it inherits the properties of the parent class child class also have protected constructor and it hence we cannot make the object instance out of it.....and now but if i declear the constructor under the child class then we can make instance object out of it right?

//? then we add the holidays to each of the departments
 

const itHolidays:Holidays=[
  {
    date:new Date(2024,12,2),
    reason:"krishna Jayanti"
  },
  {
    date:new Date(2025,1,2),
    reason:"it department day"
  }
]

const adminHolidays:Holidays=[
  {
    date:new Date(2023,4,12),
    reason:"christmas"
  },
{
  date:new Date(2024,12,12),
  reason:"admin day"
}
]

const itDepart:ItDepartment=new ItDepartment()
const adminPart:adminDepartment=new adminDepartment()

itDepart.addHolidays(itHolidays)
adminPart.addHolidays(adminHolidays)

itDepart.printHolidays()
adminPart.printHolidays()