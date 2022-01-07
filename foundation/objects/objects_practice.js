/*let user = new Object();
let user = {
    name: "john",
    age: 30
};

user.isAdmin = true; //make john the user an admin

delete user.age; //delete age from john object
*/

//Exercises from https://javascript.info/object#property-value-shorthand

//Task 1
let user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

for (let key in user){
    console.log(key);
}