let greet = (person : Person) => {
    return "Hello, " + person.fullName + "!";
};

let person = new Person("John Doe");
document.body.innerHTML = greet(person);
document.body.style.fontFamily = "Arial,Helvetica,sans-serif";