// const num: number = 15;

// if (num > 15) {
//   console.log("É maior que 15");
// } else if (num === 15) {
//   console.log("igual a 15");
// } else {
//   console.log("menor q 15");
// }

const typeUser = {
  admin: "Seja bem vindo admin",
  student: "Você é estudante",
  viewer: "Somente leitura",
};

function validateUser(user: string) {
  console.log(typeUser[user as keyof typeof typeUser]);
}

//const user = "student";


validateUser(user);
