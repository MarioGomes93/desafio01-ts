import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { EspecialAccount } from './class/EspecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mário', 10)
console.log(peopleAccount)
peopleAccount.deposit()
peopleAccount.withdraw()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit()
companyAccount.withdraw()
companyAccount.getLoan()
const especialAccount: EspecialAccount = new EspecialAccount('Debora', 30)
console.log(especialAccount)
especialAccount.deposit()
especialAccount.withdraw()
