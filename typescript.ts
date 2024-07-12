class User {
  name: string = "Vini";
  age: number = 36;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName() {
    return console.log(this.name, this.age);
  }
}

const vitor: User = new User("Vitor", 39);

vitor.showName();
