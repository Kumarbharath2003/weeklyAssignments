<<<<<<< HEAD
'use strict';

// SessionHandler object with role property
const sessionHandler = {
    role : "guest",
    login : function(){
        return `${this.username} logged in as ${this.role}`;
    },
    logout : function(){
        return `${this.username} logged out`;
    }
}

const user1 = Object.create(sessionHandler);
user1.username = 'arjun';

const user2 = Object.create(sessionHandler);
user2.username = 'sara';
user2.role = 'admin';

// TODO: Need to add a comment why user1 & user2 logged in as different users
console.log(user1.login());
console.log(user2.login());

sessionHandler.role = 'member';

// TODO: Need to add a comment why user1 always lookup sessionHandler object
console.log(user1.login());

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(user1)));

// TODO: Need to add a comment why login & logout are not duplicated in memory
console.log(Object.keys(user1));

console.log("A. Station Master starts duty");

setTimeout(() =>
{
    console.log("B. Late train arrives");
}, 0);

const announce = setInterval(() =>
{
    console.log("C. Repeated announcement");
}, 100);

Promise.resolve()
.then(() =>
{
    console.log("D. Microtask 1");
})
.then(() =>
{
    console.log("E. Microtask 2");
});

setTimeout(() =>
{
    console.log("F. Clearing announcements");
    clearInterval(announce);
}, 250);

console.log("G. Station Master ends duty");




console.log("employee id comprison");
{
    const dbEmployeeId =101;
    const apiEmployeeId = 101;
    console.log(dbEmployeeId == apiEmployeeId);
    console.log(dbEmployeeId === apiEmployeeId);
    console.log(Number(apiEmployeeId) === dbEmployeeId);
}
console.log("\n=== example student marks validation ===");
{
    function validation(marks){
        if (marks){
            return "marks accepted";
        }
    }
    function validationMarksfixed(marks){
        if (marks === undefined || marks === null){
            return "marks are required";
        }
        return "marks accepted";
    }
    console.log(validation(22));
    console.log(validationMarksfixed(0));
}
console.log("\n=== example employee experience ===");



 console.log("\n checking the falsy values");
console.log(1 == "1");
console.log(1 === "1");

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console,log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean([]));

=======
'use strict';

// SessionHandler object with role property
const sessionHandler = {
    role : "guest",
    login : function(){
        return `${this.username} logged in as ${this.role}`;
    },
    logout : function(){
        return `${this.username} logged out`;
    }
}

const user1 = Object.create(sessionHandler);
user1.username = 'arjun';

const user2 = Object.create(sessionHandler);
user2.username = 'sara';
user2.role = 'admin';

// TODO: Need to add a comment why user1 & user2 logged in as different users
console.log(user1.login());
console.log(user2.login());

sessionHandler.role = 'member';

// TODO: Need to add a comment why user1 always lookup sessionHandler object
console.log(user1.login());

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(user1)));

// TODO: Need to add a comment why login & logout are not duplicated in memory
console.log(Object.keys(user1));

console.log("A. Station Master starts duty");

setTimeout(() =>
{
    console.log("B. Late train arrives");
}, 0);

const announce = setInterval(() =>
{
    console.log("C. Repeated announcement");
}, 100);

Promise.resolve()
.then(() =>
{
    console.log("D. Microtask 1");
})
.then(() =>
{
    console.log("E. Microtask 2");
});

setTimeout(() =>
{
    console.log("F. Clearing announcements");
    clearInterval(announce);
}, 250);

console.log("G. Station Master ends duty");




console.log("employee id comprison");
{
    const dbEmployeeId =101;
    const apiEmployeeId = 101;
    console.log(dbEmployeeId == apiEmployeeId);
    console.log(dbEmployeeId === apiEmployeeId);
    console.log(Number(apiEmployeeId) === dbEmployeeId);
}
console.log("\n=== example student marks validation ===");
{
    function validation(marks){
        if (marks){
            return "marks accepted";
        }
    }
    function validationMarksfixed(marks){
        if (marks === undefined || marks === null){
            return "marks are required";
        }
        return "marks accepted";
    }
    console.log(validation(22));
    console.log(validationMarksfixed(0));
}
console.log("\n=== example employee experience ===");



 console.log("\n checking the falsy values");
console.log(1 == "1");
console.log(1 === "1");

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console,log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean([]));

>>>>>>> 9d4eae8fc4c18d5a191e577469ea484e55bceaa7
