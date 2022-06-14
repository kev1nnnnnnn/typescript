/* eslint-disable */

// Tipos básicos (aqui ocorre interferência de tipos)
let nome: string = 'John';
let idade: number =  25;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-um');
let big: bigint = 10n;

// Arrays
let arrayOfNumbers: Array<number> = [1,2,3];
let arrayOfNumbers2: number[] = [1,2,3];

let arrayOfString: Array<string> = ['a', 'b'];
let arrayOfString2: string[] = ['c', 'd'];

// Objetos
let pessoa: {
    nome: string,
    idade: number,
    adulto?: boolean
} = {
    idade: 30,
    nome: 'john',
}

//funcoes
function somar(a: number, b: number): number {
    return a + b;
}
const soma2: (a: number, b: number) => number = (a, b) => a + b;



