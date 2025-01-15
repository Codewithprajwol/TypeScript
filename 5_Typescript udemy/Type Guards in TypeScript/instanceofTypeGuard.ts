//? instance Type Guard is typically used in class

abstract class Product{
    constructor(public name:string,public price:number){}
    abstract getPrice():number;
}

class Electronics extends Product{
    constructor(name:string, price:number,public warranty:number){
        super(name,price);
    }
    getPrice():number{
        return this.price;
    }

}

class Clothing extends Product{
    constructor(name:string, price:number, public size:string, public material:size){
        super(name,price)
    }

    getPrice():number{
        return this.price;
    }
}

function displayDetails(product:Product):void{
    console.log(product.name,product.getPrice())

    if(product instanceof Electronics){
        console.log(product.warranty)
    }

    if(product instanceof Clothing){
        console.log(product.material,product.size)
    }
}   