// Array<T> - t []

export function multiplicaArgs(...args: Array<number>): number {
    //O método reduce()executa uma função redutora (fornecida por você) para cada elemento do array, resultando em um único valor de retorno.
    return args.reduce((ac, valor) => ac * valor, 1); //iniciar com 1
}

export function concatenaStrings(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}


export function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase());
}


const results = multiplicaArgs(2,2,2);
const concatena = concatenaStrings('a', 'b', 'c');
const upper = toUpperCase('c', 'd', 'e');
console.log(results);
console.log(concatena);
console.log(upper);





