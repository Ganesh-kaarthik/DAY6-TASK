class person {
    constructor (Name, age, email, education, profession, experience){
      this. Name = Name;
      this. age = age;
      this. email = email;
      this. education = education;
      this. profession = profession;
      this. experience = experience;
      }
      getDetails () {
        return (`
        NAME : ${this.Name}
        AGE : ${this.age}
        EMAIL : ${this.email}
        EDUCATION : ${this.education}
        PROFESSION : ${this.profession}
        EXPERIENCE : ${this.experience}
        `);
      }
  }
  let person1 = new person ("Ganesh" , 27, "ganeshking@gmail.com", "B.E",  "Software Engineer", 5);
  let person2 = new person ("Karthik", 28, "karthikprince@gmail.com", "B.E", "SDE", 6);
  let person3 = new person ("Abilash", 27, "lashliger007@gmail.com", "MBA", "Manager", 4);
  let person4 = new person ("Swetha", 25, "swethapinkyprincess@gmail.com", "B.E", "Data Analyst", 3);
  let person5 = new person ("sohal",29, "sohalstarkstan@gamil.com", "M.Com", "Digital marketer", 7);
  
  console.log(person1.getDetails());
  console.log(person2.getDetails());
  console.log(person3.getDetails());
  console.log(person4.getDetails());
  console.log(person5.getDetails());
  