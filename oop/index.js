class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.job = "";// we din't set job in constructor
    }
    getName = () => {
        return this.name;
    }       
    getAge = () =>{
        return this.age;
    }
    setJob = (job) => {
        this.job = job;
    }
}

const alf=new Person("Alf", 19);
const bob=new Person("Bob", 25);

class Family {
    constructor(address,rent, residents) {
        this.address = address;
        this.rent = rent;
        this.residents = residents; // Array of Person objects
    }
    addResident = (resident)=>{
        this.residents.push(resident);
    }
}

const family1=new Family("123 Main St", 1200, [alf, bob]);
const family2=new Family("456 Oak Ave", 1500, []);
const walker=new Person("Jonnie Walker", 85);
family2.addResident(walker);
console.log(family2.residents);
walker.setJob("Developer");
console.log(family2.residents);

console.log(family1.residents);

//Abstraction

/* 
➡️ hiding complex implementation details and showing only the 
essential features of the object.
    For example, when you drive a car, you don't need to understand the complex mechanics of how the engine works;
     you just need to know how to operate the steering wheel, 
     pedals, and gear shift.



*/

// Encapsulation

/*  
➡️ protecting certain attributes and methods from being accessed or
 modified directly from outside the class.
   This is typically achieved using access modifiers like private, protected, and public.
    For example, a bank account class may have a private balance attribute that can only be modified through deposit and withdraw methods,
     ensuring that the balance cannot be changed arbitrarily from outside the class.
*/


// Inheritance

/* 
➡️ creating a new class (subclass) that inherits properties and methods from an existing class (superclass).
 This allows for code reuse and the creation of hierarchical relationships between classes.
  For example, a Dog class may inherit
*/


class Programmer extends Person {
    constructor(name, age, company,Language) {
        super(name, age); // Call the constructor of the Person class
        this.company = company;
        this.Language=Language;
    }
    sayHi=() =>{
        return `Hi, I'm ${this.getName()}, a programmer working at ${this.company}.`;
    }
}

const dev=new Programmer("Alice", 30, "TechCorp","JavaScript");
console.log(dev.sayHi());

