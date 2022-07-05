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

function Admin(username, email, title){
  User.call(this,username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
//delete a user
};

const userOne = new User("mario", "mairo@thenetninja.co.uk"); 
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Admin("cheryl","cheryl@gmail.com","the-black-ninja");

console.log(userOne, userTwo, userThree);
userOne.login().logout();


