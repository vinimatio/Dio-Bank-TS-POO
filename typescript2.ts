let b: string = "b";

let n: number = 2;

let x: boolean = true;

interface IPessoa {
  name: string;
  age: number;
  profession?: string;
}

const pessoa: IPessoa = {
  name: "Vini",
  age: 36,
};

const otherperson: IPessoa = {
  name: "Vini",
  age: 36,
  profession: "Dev",
};

const arrayPerson: Array<IPessoa> = [pessoa, otherperson];
