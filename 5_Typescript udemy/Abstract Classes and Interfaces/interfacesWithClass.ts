namespace module1{
    enum AutomobileType{
        car='car',
        bus='bus',
        truck='truck',
        bike='bike'
    }
    enum AutomobileBrand{
        ferrari="ferrari",
        proche="proche",
        bmw="BMW",
        honda="honda",
        toyota="toyota"
    }
    
    enum AutomobileColors{
        green="green",
        pink="pink",
        blue="blue",
        yellow="Yellow",
        black="black",
        silver="silver"
    }
    
    //? generics along with interfaces
    interface AutoMobiles<Type,Brand,Colors>{//! here generics are used
        name:Type,
        brand:Brand,
        color:Colors[],
        description:string
    }
    
    class car implements AutoMobiles<string,AutomobileBrand,AutomobileColors>{
        public name:string="car";
        constructor(public brand:AutomobileBrand,public color:AutomobileColors[]){

        }
        public description: string="this is a new farrari"
       
    }
    
    const gadi:car=new car(AutomobileBrand.ferrari,[AutomobileColors.black,AutomobileColors.blue])
    console.log(gadi)
}

//? now implementing use of multiple interfaces in classes
namespace module2{
    enum AutomobileType{
        car='car',
        bus='bus',
        truck='truck',
        bike='bike'
    }
    enum AutomobileBrand{
        ferrari="ferrari",
        proche="proche",
        bmw="BMW",
        honda="honda",
        toyota="toyota"
    }
    
    enum AutomobileColors{
        green="green",
        pink="pink",
        blue="blue",
        yellow="Yellow",
        black="black",
        silver="silver"
    }
    
    //? generics along with interfaces
    interface AutoMobiles<Type,Brand,Colors>{//! here generics are used
        name:Type,
        brand:Brand,
        color:Colors[],
        description:string
    }

    interface commercialVehicle{
        capacity:string,
        lisenceRenewDate:Date,
    }
    
    class truck implements AutoMobiles<string,AutomobileBrand,AutomobileColors>,commercialVehicle{
        public name:string="truck";
        public constructor(public brand:AutomobileBrand,public color:AutomobileColors[]){

        }
        public description: string="this is a new truck";
        public capacity: string="five";
        public lisenceRenewDate: Date=new Date();    
    }
    const newTruck:truck=new truck(AutomobileBrand.proche,[AutomobileColors.pink])
    console.log(newTruck)
}

