class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName = () => {
        return this.name;
    }       
    getAge = () =>{
        return this.age;
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
}

const family1=new Family("123 Main St", 1200, [alf, bob]);

console.log(family1.residents);