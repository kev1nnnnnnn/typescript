function semRetorno(...args:string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Hugo',
    sobrenome: 'Jorge',

    exibirNome(): void {
      console.log(this.nome + ' ' +  this.sobrenome);
    }

};

console.log(pessoa.exibirNome());

semRetorno('John', 'Kevin')

export  { pessoa };
