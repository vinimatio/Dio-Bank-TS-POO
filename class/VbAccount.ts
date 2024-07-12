export abstract class VbAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }

  updateBalance(value: number): void {
    this.balance += value;
  }

  deposit = (value: number): string => {
    if (this.validateStatus() && value > 0) {
      this.balance += value;
      return `Você depositou ${value}, seu saldo atual é ${this.balance}`;
    } else if (!this.validateStatus()) {
      return `A conta está desativada, procure o atendimento`;
    } else {
      return `Deposite um valor válido.`;
    }
  };

  withdraw = (value: number): string => {
    if (this.validateStatus() && value > 0 && value <= this.balance) {
      this.balance -= value;
      return `Você sacou ${value}, seu saldo atual é ${this.balance}`;
    } else if (!this.validateStatus()) {
      return `A conta está desativada, procure o atendimento`;
    } else if (value > this.balance) {
      return `Saldo insuficiente(${this.balance})`;
    } else {
      return `Solicite um valor válido`;
    }
  };

  validateStatus(): boolean {
    if (this.status) {
      return this.status;
    } else {
      throw new Error("Conta inválida");
    }
  }
}
