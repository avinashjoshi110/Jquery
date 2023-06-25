
// let vishu = {
//     name : "Vishu Puvar",
//     course : "WD" ,
//     degree : "BCA",
//     personal :{
//         age : 29,
//         height : "five inch"
//     }
    
// }



// class Animal {
//     display(){
//         console.log("This is First class");
//     }
// }

// const obj = new Animal();
// obj.display();

// const person = new Map ([
//     ['name', 'Avinash' ],
//     ['Age', 25 ],
//     ['class', 'first' ],

// ])

// console.log(person.delete('name'));

// console.log(person);
// console.log(person.size)
// console.log(person.clear('age'))

const arr = [
    ['name', 'Avinash' ],
    ['Age', 25 ],
    ['class', 'first' ]
]

const obj = Object.fromEntries(arr);
console.log(obj)