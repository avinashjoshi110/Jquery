class Animal {
    constructor(){
        console.log("This is animal constructor");
    }

}

class Dog extends Animal {
    constructor(){
        super();
        console.log("This is dog constructor");
    }
}
const obj = new Dog();
obj.Dog()