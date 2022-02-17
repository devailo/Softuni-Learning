class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(point1,point2){
        let side1 = Math.abs(point1.x - point2.x);
        let side2 = Math.abs(point1.y - point2.y);
        return Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2));
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
