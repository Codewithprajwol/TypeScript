// example of descriminating unions and exhaustiveness checking


type circle={
      shape:'circle',
      radius:number  
}

type rectangle={
    shape:'rectangle',
    length:number;
    breadth:number
}

type Square={
    shape:'square',
    side:number
}


type shapeUnion=circle | rectangle| Square;


function findShape(shape:shapeUnion){
    switch(shape.shape){
        case "circle":
            return Math.PI* (shape.radius**2)
        case "rectangle":
            return  (shape.length*shape.breadth)
        case "square":
            return (shape.side**2)
        default:
            const _exhaustive:never=shape;
            return _exhaustive;
    }
}

const squareResult=findShape({shape:'square',side:2})
console.log(squareResult)

