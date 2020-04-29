//  Create a class and export it

class Person  {
    constructor(name, age){
      this.name = name;
      this.age = age
    }
    greeting(){
      console.log(`Je m'appelle ${this.name} et j'ai ${this.age} ans`);
    }
}

//  Make this class available outside
module.exports = Person;
