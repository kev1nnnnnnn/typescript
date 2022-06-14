const objetoA: {
    chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveB = 'Nova chave';
objetoA.chaveC = 'Nova chave';

console.log(objetoA);
