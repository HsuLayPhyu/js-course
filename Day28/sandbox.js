// class User {
//     constructor(username, email) {
//       // set up properties
//       this.username = username;
//       this.email = email;
//       this.score = 0;
//     }
//     login() {
//       console.log(`${this.username} just logged in`);
//       return this;
//     }
//     logout() {
//       console.log(`${this.username} just logged out`);
//       return this;
//     }
//     incScore() {
//       this.score += 1;
//       console.log(`${this.username} has a score of ${this.score}`);
//       return this;
//     }
//   }

//   class Admin extends User{
//     constructor(username, email, title) {
//            super(username, email);
//            this.title = title;
//          }
//          deleteUser(user) {
//           users = users.filter((u) => {
//           return u.username !== user.username;
//            });
//         }
//   }

//constructor functions

function User(username, email) {
  this.username = username;
  this.email = email;
  //   this.login = function () {
  //     console.log(`${this.username} has logged in`);
  //   };
}
User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};
const userOne = new User("mario", "mairo@thenetninja.co.uk"); //instance of User class
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
//const userThree = new Admin("cheryk", "cheryl@gmail.com");

console.log(userOne, userTwo);
userOne.login().logout();

// let users = [userOne, userTwo, userThree];

// console.log(users);

// userThree.deleteUser(userTwo);
// console.log("after delete", users);
// the 'new' keyword
// 1 - it creates a new empty object {}
// 2- it binds the balue of 'this' to the new empty object
// 3- it calls the constructor function to 'build' the object

// instance => individual obj created using classes

//userOne.login().incScore().incScore().logout();

// method chaining works only when there is return value
