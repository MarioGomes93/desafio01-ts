import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private loan: number = 100

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (): any => {
    if(this.validateStatus()){
      this.setBalance(this.getBalance()+this.loan)
      console.log("O seu saldo após o empréstimo é " + this.getBalance().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
    }
    else {
      console.log('Conta inválida! Verfique a conta e tente novamente.')
    }
  }
}
