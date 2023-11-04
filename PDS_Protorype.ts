abstract class Vehicle {
    constructor(
      public model: string,
      public brand: string,
      public color: string,
      public numberOfWheels: number
    ) {}
  
    abstract clone(): Vehicle;
    abstract represent(): string;
  }
  
  class Car extends Vehicle {
    constructor(
      model: string,
      brand: string,
      color: string,
      public numberOfWheels: number,
      public numberOfDoors: number
    ) {
      super(model, brand, color, numberOfWheels);
    }
  
    clone(): Vehicle {
      return new Car(this.model, this.brand, this.color, this.numberOfWheels, this.numberOfDoors);
    }
  
    represent(): string {
      return `Car - Model: ${this.model}, Brand: ${this.brand}, Color: ${this.color}, Wheels: ${this.numberOfWheels}, Doors: ${this.numberOfDoors}`;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(
      model: string,
      brand: string,
      color: string,
      public numberOfWheels: number,
      public hasHelmetCompartment: boolean
    ) {
      super(model, brand, color, numberOfWheels);
    }
  
    clone(): Vehicle {
      return new Motorcycle(this.model, this.brand, this.color, this.numberOfWheels, this.hasHelmetCompartment);
    }
  
    represent(): string {
      return `Motorcycle - Model: ${this.model}, Brand: ${this.brand}, Color: ${this.color}, Wheels: ${this.numberOfWheels}, Helmet Compartment: ${this.hasHelmetCompartment}`;
    }
  }
  
  class Application {
    createVehicleArray(): Vehicle[] {
      const vehicles: Vehicle[] = [];
  
      for (let i = 0; i < 6; i++) {
        if (i < 3) {
          const car = new Car(`Car${i}`, 'BrandA', 'Red', 4, 4);
          vehicles.push(car);
        } else {
          const motorcycle = new Motorcycle(`Motorcycle${i}`, 'BrandB', 'Blue', 2, true);
          vehicles.push(motorcycle);
        }
      }
  
      return vehicles;
    }
  
    cloneVehicleArray(vehicles: Vehicle[]): Vehicle[] {
      const clonedVehicles: Vehicle[] = [];
  
      for (const vehicle of vehicles) {
        clonedVehicles.push(vehicle.clone());
      }
  
      return clonedVehicles;
    }
  }
  
  const app = new Application();
  const originalVehicles = app.createVehicleArray();
  const clonedVehicles = app.cloneVehicleArray(originalVehicles);
  
  for (const vehicle of clonedVehicles) {
    console.log(vehicle.represent());
  }
  