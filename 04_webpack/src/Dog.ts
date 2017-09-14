import { Animal } from "./Animal";

export class Dog extends Animal {
    public speak(): string {
        return "Woof!";
    }

    public render(): HTMLElement {
        var div = super.render();
        div.className = "dog";
        return div;
    }
}