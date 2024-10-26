class Account {
    constructor(firstName, lastName, email, password, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }
    printDetails() {
        console.log(`სახელი: ${this.firstName}, გვარი: ${this.lastName}, იმეილი: ${this.email}, ქალაქი: ${this.city}`);
    }
}

const accounts = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newAccount = new Account(
        this.firstName.value,
        this.lastName.value,
        this.email.value,
        this.password.value,
        this.city.value
    );
    accounts.push(newAccount);
    newAccount.printDetails();
    this.reset();
});