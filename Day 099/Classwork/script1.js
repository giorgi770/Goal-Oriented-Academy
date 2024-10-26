class User {
    // საჯარო ველი
    username;
  
    // პირადი ველი
    #password;
  
    // სტატიკური საჯარო ველი, მომხმარებელთა რაოდენობისთვის
    static userCount = 0;
  
    constructor(username, password) {
      this.username = username;
      this.#password = password;
      User.#incrementUserCount(); // სტატიკური პირადი მეთოდის გამოძახება
    }
  
    // პაროლის მიღება (დაფარული ვერსია)
    get password() {
      return "****";
    }
  
    // პაროლის შეცვლა
    set password(newPassword) {
      if (newPassword.length >= 6) {
        this.#password = newPassword;
      } else {
        console.error("პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო.");
      }
    }
  
    // სტატიკური საჯარო მეთოდი, რომელიც აბრუნებს მომხმარებელთა რაოდენობას
    static getUserCount() {
      return User.userCount;
    }
  
    // სტატიკური პირადი მეთოდი, რომელიც ზრდის მომხმარებელთა რაოდენობას
    static #incrementUserCount() {
      User.userCount++;
    }
  
    // მომხმარებლის მონაცემების ჩვენება
    displayInfo() {
      return `მომხმარებელი: ${this.username}, პაროლი: ${this.password}`;
    }
  }
  
  // გამოყენება
  let user1 = new User("alex", "mypassword123");
  console.log(user1.displayInfo()); // მომხმარებლის მონაცემების ჩვენება
  user1.password = "newpassword123"; // პაროლის შეცვლა
  console.log(User.getUserCount()); // მომხმარებელთა რაოდენობის ჩვენება
  