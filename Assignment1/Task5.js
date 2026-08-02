<<<<<<< HEAD


'use strict';

console.log("\n========== Assignment 3 : Classes, Inheritance and Encapsulation ==========");


// ==========================================================
// 1. Parent Class
// User is the parent class.
// It contains a common logout() method and
// a static property to count total users.
// ==========================================================

class User
{
    static totalUsers = 0;

    constructor(username)
    {
        this.username = username;
        User.totalUsers += 1;
    }

    logout()
    {
        console.log(`${this.username} logged out`);
    }
}


// ==========================================================
// 2. Child Class : AdminUser
// AdminUser inherits all properties and methods
// from the User class.
// It also uses a private password field.
// ==========================================================

class AdminUser extends User
{
    #password;

    constructor(username, password)
    {
        super(username);
        this.#password = password;
    }

    // Check whether the entered password is correct
    login(attempt)
    {
        if(attempt === this.#password)
        {
            console.log("Access granted");
        }
        else
        {
            console.log("Access denied");
        }
    }

    // Override the parent logout() method
    logout()
    {
        super.logout();
        console.log("Admin session cleared");
    }

    // Getter method to check whether password exists
    get hasPassword()
    {
        if(this.#password)
        {
            return true;
        }

        return false;
    }
}


// ==========================================================
// 3. Child Class : GuestUser
// GuestUser also inherits from User.
// It has its own logout() implementation.
// ==========================================================

class GuestUser extends User
{
    constructor(username)
    {
        super(username);
    }

    logout()
    {
        super.logout();
        console.log("Guest data discarded");
    }
}


// ==========================================================
// 4. Create Objects
// Create one AdminUser object and one GuestUser object.
// ==========================================================

const admin = new AdminUser("neha", "s3cret");
const guest = new GuestUser("visitor1");


// ==========================================================
// 5. Test Login
// First attempt is incorrect.
// Second attempt is correct.
// ==========================================================

admin.login("wrong");
admin.login("s3cret");


// ==========================================================
// 6. Store Objects in an Array
// Demonstrates polymorphism by calling logout()
// for different object types.
// ==========================================================

const sessions = [admin, guest];

sessions.forEach((user) => user.logout());


// ==========================================================
// 7. Display Total Number of Users
// Static property belongs to the class,
// not individual objects.
// ==========================================================

console.log(User.totalUsers);


// ==========================================================
// 8. Check Password Availability
// Getter method returns true if password exists.
// ==========================================================

console.log(admin.hasPassword);


// ==========================================================
// 9. Private Field
// Private members cannot be accessed directly
// outside the class.
// ==========================================================

// SyntaxError: Private field '#password' must be declared
// in an enclosing class.

=======


'use strict';

console.log("\n========== Assignment 3 : Classes, Inheritance and Encapsulation ==========");


// ==========================================================
// 1. Parent Class
// User is the parent class.
// It contains a common logout() method and
// a static property to count total users.
// ==========================================================

class User
{
    static totalUsers = 0;

    constructor(username)
    {
        this.username = username;
        User.totalUsers += 1;
    }

    logout()
    {
        console.log(`${this.username} logged out`);
    }
}


// ==========================================================
// 2. Child Class : AdminUser
// AdminUser inherits all properties and methods
// from the User class.
// It also uses a private password field.
// ==========================================================

class AdminUser extends User
{
    #password;

    constructor(username, password)
    {
        super(username);
        this.#password = password;
    }

    // Check whether the entered password is correct
    login(attempt)
    {
        if(attempt === this.#password)
        {
            console.log("Access granted");
        }
        else
        {
            console.log("Access denied");
        }
    }

    // Override the parent logout() method
    logout()
    {
        super.logout();
        console.log("Admin session cleared");
    }

    // Getter method to check whether password exists
    get hasPassword()
    {
        if(this.#password)
        {
            return true;
        }

        return false;
    }
}


// ==========================================================
// 3. Child Class : GuestUser
// GuestUser also inherits from User.
// It has its own logout() implementation.
// ==========================================================

class GuestUser extends User
{
    constructor(username)
    {
        super(username);
    }

    logout()
    {
        super.logout();
        console.log("Guest data discarded");
    }
}


// ==========================================================
// 4. Create Objects
// Create one AdminUser object and one GuestUser object.
// ==========================================================

const admin = new AdminUser("neha", "s3cret");
const guest = new GuestUser("visitor1");


// ==========================================================
// 5. Test Login
// First attempt is incorrect.
// Second attempt is correct.
// ==========================================================

admin.login("wrong");
admin.login("s3cret");


// ==========================================================
// 6. Store Objects in an Array
// Demonstrates polymorphism by calling logout()
// for different object types.
// ==========================================================

const sessions = [admin, guest];

sessions.forEach((user) => user.logout());


// ==========================================================
// 7. Display Total Number of Users
// Static property belongs to the class,
// not individual objects.
// ==========================================================

console.log(User.totalUsers);


// ==========================================================
// 8. Check Password Availability
// Getter method returns true if password exists.
// ==========================================================

console.log(admin.hasPassword);


// ==========================================================
// 9. Private Field
// Private members cannot be accessed directly
// outside the class.
// ==========================================================

// SyntaxError: Private field '#password' must be declared
// in an enclosing class.

>>>>>>> 9d4eae8fc4c18d5a191e577469ea484e55bceaa7
// console.log(admin.#password);