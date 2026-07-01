function addi(n1: string, n2: string): string;
function addi(n1: number, n2: number): number;

function addi(n1: any, n2: any): any {
    return n1 + n2;
}

console.log(addi("Hey", "hi"));