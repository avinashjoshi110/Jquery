// // // Polymorphism

// // class User{
// //     name;
// //     email;
// //     #password;
// //     constructor(){
// //         console.log("This is a default constructor");
// //     }
// //     #validateEmail(){
// //         return true;
// //     }
// //     #validatePassword(){
// //         return true;
// //     }
// //     signUp(name,email,password){
// //         let isValidated = false;
// //         isValidated = this.#validateEmail();
// //         isValidated = this.#validatePassword();

// //         if (isValidated) {
// //             this.name =name;
// //             this.email =email;
// //             this.#password = password;
// //             console.log("user registered successfully");
// //         }
// //         else{
// //             console.log("authentication failed");
// //         }
// //     }
// //     login(email,password){
// //         if(this.email === email && this.#password === password){
// //             console.log("Login successfully");
// //         }
// //         else{
// //             console.log("Authentication failed");
// //         }
// //     }
// //     #registeredUser(email){
// //         return true;
// //     }
// //     resetPassword(email,newpassword){
// //         if(this.#registeredUser(email)){
// //             this.#password = newPassword;
// //             console.log("Operation performed successfully")
// //         }
// //         else{
// //             console.log("no account found")
// //         }
// //     }
// // }

// // const user = new User();
// // user.signUp("avinash","avinash@gmail.com","avinash");
// // user.login("avinash@gmail.com","avinash")



// // Polymorphism

// class User{
//     name;
//     email;
//     #password;
//     constructor(){
//         console.log("This is a default constructor");
//     }
//     #validateEmail(){
//         return true;
//     }
//     #validatePassword(){
//         return true;
//     }
//     signUp(name,email,password){
//         let isValidated = false;
//         isValidated = this.#validateEmail();
//         isValidated = this.#validatePassword();

//         if (isValidated) {
//             this.name =name;
//             this.email =email;
//             this.#password = password;
//             document.getElementById('name').textContent = "User Registered successfully";
//         }
//         else{
//             document.getElementById('name').textContent = " Authentication failed ";
//         }
//     }
//     login(email,password){
//         if(this.email === email && this.#password === password){
//             console.log("Login successfully");
//         }
//         else{
//             console.log("Authentication failed");
//         }
//     }
//     #registeredUser(email){
//         return true;
//     }
//     resetPassword(email,newpassword){
//         if(this.#registeredUser(email)){
//             this.#password = newPassword;
//             console.log("Operation performed successfully")
//         }
//         else{
//             console.log("no account found")
//         }
//     }
// }

// const user = new User();
// user.signUp("avinash","avinash@gmail.com","avinash");
// user.login("avinash@gmail.com","avinash")





class User {
    constructor(email,passwoed){
        this.email = email;
        this.password = password;

    }
    login(email,passwoed){
        if(email=== this.email && passwoed === this.password ){
            console.log("log in successfully")
        }
        else {
            console.log("Authentication failed")
        }
    }
}

class Author extends User {
    #numofPost;
    constructor(email,password){
        super(email,password);
        this.#numofPost = 0;       
}
 createPost(content){
    this.#numofPost++;
 }
 getNumofPost(){
    return this.#numofPost;
 }

}

class Admin extends User {
    constructor(email,passwoed){
        super(email,passwoed);
    }
    login(email,passwoed){
        const isValidAdmin = true;
        if(email === this.email && password == this.password && isValidAdmin ){
            console.log("Admin login Successfully");
        }
        else{
            console.log("Authentication Failed");       
        }
    }
    removeUser(userID){
        console.log("User REmoved Successfully");
    }
}

const user = new Admin ("Avinash" , "Avinash110"); 
user.login("Avinash", "Avinash110");

