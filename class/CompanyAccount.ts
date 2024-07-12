import { VbAccount } from "./VbAccount";

export class CompanyAccount extends VbAccount {
  private loanLimit: number = 500;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
    this.loanLimit = this.loanLimit;
  }

  getLoan = (value: number): string => {
    if (this.validateStatus() && value > 0 && value <= this.loanLimit) {
      this.loanLimit -= value;
      this.updateBalance(value);
      return `Você pegou empréstimo de ${value}, seu saldo atual é ${this.getBalance()}. Seu limite disponível para empréstimo é ${
        this.loanLimit
      }`;
    } else if (value > this.loanLimit) {
      return `Limite de empréstimo insuficiente(${this.loanLimit})`;
    } else {
      return `Solicite um valor válido`;
    }
  };
}
