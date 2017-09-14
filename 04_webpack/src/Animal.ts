export abstract class Animal {
    public abstract speak(): string
    public render(): HTMLElement {
        var div = document.createElement("div");
        div.onclick = () => { alert(this.speak()); }
        return div;
    }
}