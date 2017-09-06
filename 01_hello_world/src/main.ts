class Program {
    public static print(msg: string): void {
        console.log(msg);
    }

    public static add(a: number, b: number): number {
        return a + b;
    }
}

Program.print(Program.add(1, 2).toString());