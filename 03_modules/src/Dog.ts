import { Animal } from "./Animal";

export class Dog extends Animal {
    public speak(): string {
        return "Woof!";
    }
}