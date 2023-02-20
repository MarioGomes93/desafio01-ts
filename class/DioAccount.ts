export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private depositDone: number = 60
  private withdrawDone: number = 40 
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  deposit = (): any => {
    if(this.validateStatus()){
      this.balance += this.depositDone
      console.log("O seu saldo após o depósito é " + this.balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
    }
    else {
      console.log('Conta inválida! Verfique a conta e tente novamente.')
    }
    
  }

  getDeposit = (): number => {
    return this.depositDone
  }

  withdraw = (): any => {
    if(this.validateStatus() && this.withdrawDone <= this.balance){
      this.balance -= this.withdrawDone
      console.log("O seu saldo após o saque é " + this.balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
    }
    else {
      console.log('Conta inválida ou saldo menor. Verfique e tente novamente.')
    }
    
  }

  getBalance =(): number => {
    return this.balance
  }

  setBalance =(balance: number): number => {
      this.balance = balance
      return balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
