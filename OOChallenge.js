class Vehicle {
    constructor (a, b, c) {
        this.make = a;
        this.model = b;
        this.year = c;

    }
    honk(){
        return ("Beep");
    }
    toString() {
        console.log(`The vehicle is an ${this.make} ${this.model} from ${this.year}`);
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999)

class Car extends Vehicle{
    constructor(a,b,c) {
    super(a,b,c);
    this.numWheels = 4;
    }
}
 let myFirstCar = new Car("Toyota", "Corolla", 2005)

 class Motorcycle extends Vehicle{
    constructor(a, b, c) {
        super(a,b,c);
        this.numWheels = 2;
    }
    revEngine() {
            return ("VROOM!!!")
        }
    }
 

 let myFirstMotorcycle = new Motorcycle("Honda", "NIghthawk", 2000)


 class Garage {
    constructor (cap) {
    this.capacity = cap;
    this.vehicles = [];
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";

    }
 }

 let garage = new Garage(2);