
// const obj  = {
//     Name : "Avinash",
//     course : "FED",
//     age : "25",

// }

// console.log(obj);

// => Array to string :

const fruits = ["Mango", "Banana", "Pineapple", "Cherry"];


console.log(fruits.toString());

/* <various methods of an array */

// unshift : adds the specify elements in the begining .

const fruits1 = ["Mango", "Banana", "Pineapple", "Cherry"];
console.log(fruits1.unshift("Guava"));  
console.log(fruits1); 

// with : change the value of given index
const fruits2 = ["Mango", "Banana", "Pineapple", "Cherry"];
console.log(fruits2.with(2,"apple"));
// console.log(fruits2);    

// contact : merge two or more arrays

const name1 = ["Avinash", "Vishu", "Sonu"];
const surname = ["Joshi", "Puvar", "Pandya"];
const age = [22,25,18]

const fullname = name1.concat(surname,age);
console.log(fullname);


// Object in js
const mydata = {
    "row1" : {
        "name" : "Avinash",
        "surname" : "Joshi"
    
    },

    "row2" : {
        "name" : "Vishu",
        "surname" : "Puvar"
    }
}
console.log(mydata.row2.name);


const tops = {
    "Data1" :
    {"name" : "Avinash",
    "Degree" : "B.tech"},
    "Data2":{
        "name" : "Avnash",
    "Degree" : "B.ech"
    }
}

console.log(tops);

const person = {
   "entry1" : {"name" : "Avinash",
    "lastname" : "Joshi" }
}
console.log(person);
const nperson = {...person, age: 25 }
console.log(nperson);

const presonn = {...person, "entry2" : {"name" :"Vishu", "lastname" : "Puvar" }}
console.log(presonn)


const result = {
    "Avinash" : {
        "maths" : 25,
        "English" : 28,
        "Physics" : 99, 
    }
}

const result1 = {...result, "chemistry" : 23,}
const result2 = {...result1, "Vishu" : {"maths" : 25,
"English" : 28,
"Physics" : 99,}}


console.log(result);
console.log(result1);
console.log(result2);

// COnvert Array into Object

let arr = ["one", "Two", "Three"];
const obj1 = Object.assign({}, arr);
console.log(arr);
console.log(obj1);


const arr1 = [
    ['name','avinash'],
    ['Degree','B.Tech'],
    ['Age', 25]
]
console.log(arr1);

const obj2 = Object.fromEntries(arr1);
console.log(obj2);



let revision = {
    "Avinash" : {
        "Degree" : "B.tech",
        "Specification" : "Civil ENgineering",

    },

    "Vishu" : {
        "Degree" : "BCA",
        "Specification" : "C++"
    }
}

console.log(revision);

let revisons = [
    ["name" , "Avinash"],
    ["course" , "FED"],
    ["Degre", "CE"],
    ["name" , "Vishu"],
    ["course" , "WD"],
    ["Degre", "C++"],
    
]
console.log(revisons);

let obj3 = Object.fromEntries(revisons);
console.log(obj3);

let obj4 = Object.assign({} , revisons);
console.log(obj4)


// Map FIlter Reduce

const persons = new Map([
    ["name", "Avinash"],
    ["Age" , 23],
    ["country", "India"]

])
console.log(persons);

const numb = [2,42,4,9,88,8]

const map1 = numb.map(x => x*20);
console.log(map1);

const fliter1 = numb.filter(x => x>2);
console.log(fliter1);


// Object orienter programming

 class Animal {
    eat() {
        console.log("Animal is eating");
    }
    sleep(){
        console.log("Animal is Sleeping");
    }
 }

 const animal = new Animal();
 animal.eat();
 animal.sleep();

 class Dog extends Animal {
    Voice(){
        console.log("Dog Barks");
    }
 }

 let dog1 = new Dog();
 dog1.Voice();


  function Human (Firstname , Lastname) {
    this.Firstname = Firstname;
    this.Lastname  = Lastname;
  }

  let Me =  new Human ("Avinash" , "Joshi");
  let Friend = new Human ("Parth", "Taral")
  console.log(Me.Firstname);
  console.log(Me.Lastname);
  console.log(Friend.Firstname);



//   constructor encapsulation or validating password

class User{
    #password;
    constructor (name,userName,password){
        this.name = name;
        this.userName = userName;
        this.#password = password ; 
    }
    login(userName,password){
        if(userName === this.userName && password === this.#password){
            console.log("login successfully")
        }
        else {
            console.log("Authentication failed")
        }
    }
    setpassword(newpassword){
        this.#password = newpassword;
    }
}

const user = new User('Avibash','avinash','6354788203' );
user.login("avinash","6354788203");


class Instagran {
    #password;
    constructor(userId,password){
        this.userId = userId;
        this.#password = password;
    } 
    login(userId,password){
        if(userId === this.userId && password === this.#password){
            console.log("enjoy the world")
        }
        else{
            console.log("betterluck next time")
        }
     
        
    }
    setPassword(newpassword){
        this.#password = newpassword;
    }
    

}

const ig = new Instagran("Avinash110", "avinash110");
const ig1 = new Instagran("tilak", "varma");
ig1.login("tilak","varma");


// class user1 {
//     #password;
//     constructor(name,userName,password) {
//         this.name = name;
//         this.userName = userName;
//         this.#password = password;     
//     }

//     login(userName,password){
//         if(userName === this.userName && password === this.password){
//             console.log("YOu are right")
//         }
//         else{
//             console.log("sorry! try again")
//         }

//     }
//     setpAssword(Newpassword){
//         this.#password = Newpassword;
//     }
// }

// const anoo = new user1("anu","avinash__110","Avinash@110");
// anoo.login("avinash__110","Avinash@110");

class User1 {
    #password;

    constructor(name, userName, password) {
        this.name = name;
        this.userName = userName;
        this.#password = password;
    }

    login(userName, password) {
        if (userName === this.userName && password === this.#password) {
            console.log("You are right");
        } else {
            console.log("Sorry! Try again");
        }
    }

    setPassword(newPassword) {
        this.#password = newPassword;
    }
}

const anoo = new User1("anu", "avinash__110", "Avinash@110");
anoo.login("avinash__110", "Avinash@110");














