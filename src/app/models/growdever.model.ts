import { v4 } from "uuid";

export class Growdever {
    uuid?: string;
    nome: string;
    email: string;

    constructor(nome: string, email: string, uuid?: string) {
        this.uuid = uuid ?? v4();
        this.nome = nome;
        this.email = email;
    }

    static create (nome: string, email: string, uuid?: string): Growdever {
        return new Growdever(nome, email, uuid)
    }

    toJson() {
        return {
        uuid: this.uuid,
        nome: this.nome,
        email: this.email,
        }
    }
}