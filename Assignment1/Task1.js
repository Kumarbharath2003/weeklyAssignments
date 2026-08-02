<<<<<<< HEAD

'use strict'

console.log("\n======= Assignment 1 — Object Creation Patterns (Tricky) ==========");

const USERS = [
    ["neha","abc123"],
    ["ravi","qwerty"],
    ["sara","hunter2"]
];

let users;



console.log("\n============ Object Literal ===================");
const user = {
    username : "arjun",
    password : "pass123"
};

console.log(user)



console.log("\n============ Factory Function ==================");
function createUser(username, password){
    return {
        username,
        password,
        login : (input) => {
            return input === password;
        }
    };
};

users = USERS.map(([username, password]) => createUser(username, password));

console.log(users)

console.log(users[1].login("qwerty"))


console.log("\n============ Constructor Function ==================");
function User(username, password){
        this.username = username;
        this.password = password;
};

User.prototype.login = function (input){
    return input === this.password;
};

users = USERS.map(([username, password])=> new User(username, password));

console.log(users);

console.log(Object.getPrototypeOf(users[0]) === User.prototype);
// console.log(users[1].login("qwerty"))

console.log("\n============ ES6 Class ==================");
class UserClass{
    constructor(username, password){
        this.username = username;
        this.password = password;
    };
    
    static isValidUsername(name){
        return name.length >= 4;
    };
};

try {
    users = USERS.map(([username, password])=> UserClass(username, password));
}catch(err){
    console.log(err.message);
}

console.log(UserClass.isValidUsername(users[0].username));
=======

'use strict'

console.log("\n======= Assignment 1 — Object Creation Patterns (Tricky) ==========");

const USERS = [
    ["neha","abc123"],
    ["ravi","qwerty"],
    ["sara","hunter2"]
];

let users;



console.log("\n============ Object Literal ===================");
const user = {
    username : "arjun",
    password : "pass123"
};

console.log(user)



console.log("\n============ Factory Function ==================");
function createUser(username, password){
    return {
        username,
        password,
        login : (input) => {
            return input === password;
        }
    };
};

users = USERS.map(([username, password]) => createUser(username, password));

console.log(users)

console.log(users[1].login("qwerty"))


console.log("\n============ Constructor Function ==================");
function User(username, password){
        this.username = username;
        this.password = password;
};

User.prototype.login = function (input){
    return input === this.password;
};

users = USERS.map(([username, password])=> new User(username, password));

console.log(users);

console.log(Object.getPrototypeOf(users[0]) === User.prototype);
// console.log(users[1].login("qwerty"))

console.log("\n============ ES6 Class ==================");
class UserClass{
    constructor(username, password){
        this.username = username;
        this.password = password;
    };
    
    static isValidUsername(name){
        return name.length >= 4;
    };
};

try {
    users = USERS.map(([username, password])=> UserClass(username, password));
}catch(err){
    console.log(err.message);
}

console.log(UserClass.isValidUsername(users[0].username));
>>>>>>> 9d4eae8fc4c18d5a191e577469ea484e55bceaa7
console.log(UserClass.isValidUsername(users[1].username));