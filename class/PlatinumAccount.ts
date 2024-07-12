import { VbAccount } from "./VbAccount";

export class PlatinumAccount extends VbAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): string => {
    if (this.validateStatus() && value > 0) {
      this.updateBalance(value + 10);
      return `Você depositou ${value} e ganhou 10 por ser um cliente Platinum, seu saldo atual é ${this.getBalance()}`;
    } else if (!this.validateStatus()) {
      return `A conta está desativada, procure o atendimento`;
    } else {
      return `Deposite um valor válido.`;
    }
  };
}
