import { Endereco } from "./endereco";
import { User } from "./user";

export class Credor {
    constructor(
        public id: string,
        public cnpjCpf: string,
        public nomeCredor: string,
        public email: string,
        public usuario: User,
        public dataRegistro: Date,
        public endereco: Endereco 
    ) {}

    public equals(obj: Credor) : boolean { 
        return this.cnpjCpf === obj.cnpjCpf;
    } 

    public toErrors(obj: Credor) : string { 
        return this.cnpjCpf + ', ' + this.nomeCredor + ',' + this.email, + ',' + this.endereco.bairro + ',' + this.endereco.cep;
    } 

  }