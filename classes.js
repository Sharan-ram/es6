// static keyword is used when we want to access methods of the class without creating an instance of it
// constructor is used to assign properties of the parent class to the inherited ones
class User {
  constructor(name) {
    this.name = name;
  }
  displayPlace(place) {
    return place;
  }
}

User.prototype.displayAge = age => {
  return age;
};
let sharan = new User("sharan");
//console.log(sharan.displayAge(24));
//console.log(sharan.name);
//console.log(sharan.displayPlace("bengaluru"));
console.log(sharan);
