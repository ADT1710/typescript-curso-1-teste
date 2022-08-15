import {Cadastro} from "../models/cadastro.js";
import {Cadastros} from "../models/cadastros.js";

export class CadastroController{
    private inputNome: HTMLInputElement;
    private inputIdade: HTMLInputElement;
    private inputRenda : HTMLInputElement;
    private cadastros = new Cadastros();

    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputIdade = document.querySelector('#idade');
        this.inputRenda = document.querySelector("#renda");
    }

    limpaForm():void{
        this.inputNome.value = '';
        this.inputIdade.value = '';
        this.inputRenda.value = '';
        this.inputNome.focus();
    }

    criaCadastro(): Cadastro{
        const nome = this.inputNome.value;
        const idade = parseInt(this.inputIdade.value);
        const renda = parseFloat(this.inputRenda.value);
        return new Cadastro(nome,idade,renda);
    }

    adiciona(): void{
        this.cadastros.adiciona(this.criaCadastro());
        this.limpaForm();
        console.log(this.cadastros.lista());
    }
}