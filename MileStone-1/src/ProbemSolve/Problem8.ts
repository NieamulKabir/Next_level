//Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in each subclass and test it with different dimensions.

abstract class ShapeProblem{
    abstract calculateAreaPRoblem8():number
};

class RectangleProblem8 extends ShapeProblem{
    width:number;
    height:number;
    constructor( width:number,height :number){
        super();
        this.width=width;
        this.height=height
    }
    calculateAreaPRoblem8(): number {
        return this.width* this.height;
    }
}

class CircleProblem8 extends ShapeProblem{
    radius:number;
    constructor(radius:number){
        super();
        this.radius=radius;
    }
    calculateAreaPRoblem8(): number {
        return Math.PI*(this.radius*this.radius);
    }
}

const rectangleProblem8= new RectangleProblem8(5,10);
console.log(rectangleProblem8.calculateAreaPRoblem8());

const circlePrblm = new CircleProblem8(3);
console.log(circlePrblm.calculateAreaPRoblem8());