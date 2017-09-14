import { Dog } from "./Dog";
import { Cat } from "./Cat";

var dog = new Dog();
var cat = new Cat();

document.body.appendChild(dog.render());
document.body.appendChild(cat.render());