const users = [{ id: 1, name:  'Sandro' }, { id: 2, name: 'Giorgi' }];
const names = users.map(user => user.name);
console.log(names); //ახსნა:ჩვენ შემოვიტანეთ ორი სახელი და მომხმარებლის ინფორმაცია users მასივში: შემდეგ გამოვიყენეთ map() მეთოდი, რომელიც მასივის თითოეულ ელემენტზე გაივლის. თითოეულ მომხმარებლისთვის, ის აიღებს მხოლოდ მათ name თვისებას და ამ ფუნქციის მეშვეობით მივიღებთ ახალ მასივს "names"რომელიც შეიცავს მხოლოდ მომხმარებლის სახელებს