class User {
    static userCount = 0;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isValid = this.validateAge(); 
    }

    
    validateAge() {
        return this.age > 0;
    }

    
    getInfo() {
        return `${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }

    static incrementUserCount() {
        User.userCount++;
    }
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    const user = new User(firstName, lastName, age);

    if (user.isValid) {
        // მომხმარებელთა რაოდენობის გაზრდა
        User.incrementUserCount();

        // მომხმარებლის ინფორმაციის ჩვენება
        document.getElementById('output').innerText = user.getInfo();

        // მომხმარებელთა რაოდენობის ჩვენება
        document.getElementById('userCount').innerText = `Total Users: ${User.userCount}`;
    } else {
        // შეცდომის შეტყობინება არასწორი ასაკის შემთხვევაში
        document.getElementById('output').innerText = "Invalid age. Please enter a valid age.";
    }

    // ფორმის გასუფთავება
    document.getElementById('userForm').reset();
});
