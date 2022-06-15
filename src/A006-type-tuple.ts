//Tuple
const dadosCliente1: [number, string] = [2, 'a'];
const dadosCliente2: [number, string, string] = [2, 'c', 'd'];
const dadosCliente3: [number, string, string?] = [2, 'e'];
const dadosCliente4: [number, string, ...string[]] = [2, 'e', 'f'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Hugo';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4.join(' - '));

// readonly array
const array:readonly string[] = ['john', 'kevin'];
const array2: ReadonlyArray<string> = ['Hugo', 'Jorge'];

console.log(array);
console.log(array2);



