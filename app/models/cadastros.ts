import {Cadastro} from "./cadastro.js";

export class Cadastros {
    private cadastros: Cadastro[] = [];

    adiciona(cadastro: Cadastro) {
        this.cadastros.push(cadastro);
    }

    lista(): readonly Cadastro[] {
        return this.cadastros;
    }
}