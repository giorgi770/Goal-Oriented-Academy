function Person(name, age, city, profession) {
    this.name = name;       
    this.age = age;        
    this.city = city;        
    this.profession = profession; 
  }
  
  const person1 = new Person("Nino", 30, "Tbilisi", "Software Engineer");
  const person2 = new Person("Giorgi", 45, "Batumi", "Architect");
  
  console.log(person1);
  console.log(person2);
  