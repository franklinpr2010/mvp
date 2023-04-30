import { Credor } from "./credor";
import { Endereco } from "./endereco";
import { User } from "./user";
export class Devedor {
    constructor(
        public id: string,
        public cnpjCpf: Number,
        public numeroContrato: string,
        public dataRegistro: Date,
        public telefone: string,
        public email: string,
        public user: User,
        public nome: string,
        public descricaoDivida: string,
        public cred: Credor,
        public endereco: Endereco,
        public valorDivida: Number,
        public baixada: Boolean,
        public dataBaixa: Date,

    ) {}

    public equals(obj: Devedor) : boolean { 
        return this.cnpjCpf === obj.cnpjCpf;
    } 

}