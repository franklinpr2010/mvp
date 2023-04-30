
export class Endereco {
    constructor(
        public id: string,
        public bairro: string,
        public numero: string,
        public estado: string,
        public linha: string,
        public cep: string,
        public complemento: string,
        public enderecoCompleto: string
    ) {}
    public toString(obj: Endereco) : string { 
        return this.linha + ', ' + this.numero + '-' + this.bairro;
    } 

  }