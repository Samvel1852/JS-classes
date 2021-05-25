// Create an Account class. Account should have:
// * fields
// ** id
// ** name
// ** balance
// * getters for fields
// * setters - for name and balance
// * credit(amount) - which should add amount to balance and return the updated balance.
// * debit(amount) - which should subtract the amount from the balance, if amount is less than the
// balance, otherwise output “Amount exceeded balance.”
// * transferTo(anotherAccount, amount) - which should subtract the amount from the account
// balance and add it to the given anotherAccount and return the updated balance, if amount is less
// than the balance, otherwise output “Amount exceeded balance.”
// * static method: identifyAccounts(accountFirst, accountSecond) - which gets two accounts
// and identifies if they are the same or not comparing all fields.
// * toString()

class Account {
  static identifyAccounts(accountFirst, accountSecond) {
    if (JSON.stringify(accountFirst) === JSON.stringify(accountSecond)) {
      return "Accounts are the same";
    }
    return "Accounts are different";
  }

  constructor(id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    if (!isNaN(value)) {
      this._id = value;
    } else {
      throw new Error("id must include only numbers");
    }
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (!Number.isNaN(value)) {
      this._balance = Number(value);
    } else {
      throw new Error("balance must include only numbers");
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (/^[A-z]+$/.test(value)) {
      this._name = value;
    } else {
      throw new Error("name must include only letters");
    }
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    this.balance -= amount;
    if (this.balance < 0) {
      return "Amount exceeded balance";
    }
    return this.balance;
  }

  transferTo(anotherAccount, amount) {
    if (this.balance - amount < 0) {
      return "Amount exceeded balance";
    }
    anotherAccount.balance += amount;
    this.balance -= amount;
    return this.balance;
  }

  toString() {
    return `${this.name}'s account balance is ${this.balance}`;
  }
}

let firstAccount = new Account(21345536, "David", 2000);
let secondAccount = new Account(1324321, "Smbat", 3000);

console.log(firstAccount.id);
firstAccount.id = "675464";
console.log(firstAccount.id);
console.log(firstAccount.balance);
firstAccount.balance = "4000";
console.log(firstAccount.balance);
console.log(firstAccount.name);
firstAccount.name = "Hakob";
console.log(firstAccount.name);
console.log(firstAccount.credit(3000));
console.log(firstAccount.debit(2000));
console.log(secondAccount.balance);
console.log(firstAccount.transferTo(secondAccount, 2000));
console.log(secondAccount.balance);
console.log(Account.identifyAccounts(firstAccount, secondAccount));
console.log(firstAccount.toString());
console.log(secondAccount.toString());
