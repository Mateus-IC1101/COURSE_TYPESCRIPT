interface PersonInterface{
    full_name: string,
    age: number
}

class Person implements PersonInterface {
    constructor(
        public full_name: string,
        public age: number
        ){}
}

class Employee extends Person{
}

var rick: Employee = new Employee('rick budockov', 25);

console.log(rick);