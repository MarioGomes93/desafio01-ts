import { DioAccount } from "./DioAccount"

export class EspecialAccount extends DioAccount {
  
    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
    }

    deposit = (): any => {
        if(this.validateStatus()){
          this.setBalance(this.getDeposit()+10)
          console.log("O seu saldo após o depósito é " + this.getBalance().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
        }
        else {
          console.log('Conta inválida! Verfique a conta e tente novamente.')
        }
        
      }

}
