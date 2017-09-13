import { Animal } from "./Animal";

export class Cat extends Animal {
    public speak(): string {
        return "Meow!";
    }
}