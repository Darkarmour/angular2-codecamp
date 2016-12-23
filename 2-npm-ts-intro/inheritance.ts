interface Person {
  name:string,
  age: number
}

class Man implements Person {
  name:string;
  age:number;
  
  speak() {
    console.log('In a gruff voice, hello I am ' + this.name);
  }
}

let abishek = new Man();
abishek.name = 'Abishek';
abishek.speak();