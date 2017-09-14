import { Animal } from "./Animal";

export class Cat extends Animal {
    public speak(): string {
        return "Meow!";
    }

    public render(): HTMLElement {
        var div = super.render();
        div.className = "cat";
        return div;
    }
}