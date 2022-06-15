export class Pessoa {

    constructor(
      public nome: string,
      public sobrenome: string,
      private idade: number,
      protected cpf: string
    ) {}

    getIdade(): number{
        return this.idade;
    }
    getCpf(): string {
        return this.cpf;
    }
    getNomeCompleto(): string {
        return `CLASSE PAI: ${this.nome} ${this.sobrenome}`
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return `ALUNO: ${this.nome} ${this.sobrenome}`
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return `CLIENTE: ${this.nome} ${this.sobrenome}`
    }
}

const aluno = new Aluno('John', 'Kevin', 30, '000.000.000-00');
const cliente = new Cliente('Ju', 'babalu', 25, '000.000.000-00');
const pessoa = new Pessoa('Hugo', 'Jorge', 25, '000.000.000-00');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());

