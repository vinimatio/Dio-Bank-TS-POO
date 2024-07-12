import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PlatinumAccount } from "./class/PlatinumAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(999, "Vini", 1);
console.log(peopleAccount);
console.log(peopleAccount.deposit(50));
console.log(peopleAccount);
console.log(peopleAccount.withdraw(25));
console.log(peopleAccount);


const companyAccount: CompanyAccount = new CompanyAccount(
  "Soldier Software",
  1
);
console.log(companyAccount);
console.log(companyAccount.getLoan(320));
console.log(companyAccount);


const platinumAccount: PlatinumAccount = new PlatinumAccount("Astolfo Rico", 1);
console.log(platinumAccount);
console.log(platinumAccount.deposit(100));
console.log(platinumAccount);
