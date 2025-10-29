class Vehicle {
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }

  printDetails() {
    console.log(
      "Vehicle Type:",
      this.vehicleType,
      "Make:",
      this.make,
      "Model:",
      this.model
    );
  }

  drive() {
    console.log("Drive:", this.vehicleType, this.make, this.model);
  }

  fuel() {
    console.log("Fuel:", this.vehicleType, this.make, this.model);
  }
}

class Car extends Vehicle {
  constructor() {
    super("car");
  }
}

class Truck extends Vehicle {
  constructor() {
    super("truck");
  }
}

class TwoWheeler extends Vehicle{
    constructor(){
        super("two wheeler")
    }
}