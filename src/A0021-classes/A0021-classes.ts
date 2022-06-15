export class Empresa {
    public readonly name: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    // metodo para add os colaboradores
    addColaboration(colaboration: Colaborador): void {
        this.colaboradores.push(colaboration);
    }
    mostrarColaborador(): void {
        for(const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly name: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('NBN', '92.233.871/0001-73');
const colaboration1 = new Colaborador('Hugo', 'Jorge');
const colaboration2 = new Colaborador('Viviane', 'Menezes');
const colaboration3 = new Colaborador('Johnz', 'Costa');

empresa1.addColaboration(colaboration1);
empresa1.addColaboration(colaboration2);
empresa1.addColaboration(colaboration3);

empresa1.mostrarColaborador();






