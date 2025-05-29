import { expect } from "chai";
import Pessoa from "../src/Pessoa.js";

describe("Validação de idade para consumo de álcool", () => {

    let pessoaMaiorIdade;

    beforeEach(() => {
        pessoaMaiorIdade = new Pessoa();
    })

    describe('RF001: Pessoas maiores de 17 anos podem consumir bebida alcoólica', () => {
        it('[CT-OO1] - Validar que pessoa com Idade IGUAL a 17 anos pode consumir bebida álcoolica', () => {
            const result = pessoaMaiorIdade.ehMaiorDeIdade(17);
            expect(result).to.be.true;
        });

        it('[CT-OO2] - Validar que pessoa com Idade MAIOR que 17 anos pode consumir bebida álcoolica', () => {
            const result = pessoaMaiorIdade.ehMaiorDeIdade(18);
            expect(result).to.be.true;
        });
    });

    describe('RF002: Pessoas menores de 17 anos não podem consumir bebida alcoólica.', () => {
        it('[CT-OO3] - Validar que pessoa com Idade MENOR a 17 anos não pode consumir bebida álcoolica', () => {
            const result = pessoaMaiorIdade.ehMaiorDeIdade(16);
            expect(result).to.be.false;
        });
    });

    describe('Validar possíveis erros de inserção de dados inválidos pelo usuário', () => {
        it('[CT-OO4] - Validar que o sistema não deve aceitar idade negativas', () => {
            const idade = -1 
            expect(() => {
                pessoaMaiorIdade.ehMaiorDeIdade(idade);
            }).to.throw(Error, `Idade informada: ${idade} anos. Não é permitido idade negativa`);
        });

        it('[CT-OO5] - Validar que o sistema não deve aceitar valores não numéricos', () => {
            const idade = "dezessete";
            expect(() => {
                pessoaMaiorIdade.ehMaiorDeIdade(idade);
            }).to.throw(Error, `Idade informada: ${idade} anos. Deve ser um número inteiro`);
        });

        it('[CT-OO6] - Validar que o sistema não deve aceitar valores decimais', () => {
            const idade = 17.5;
            expect(() => {
                pessoaMaiorIdade.ehMaiorDeIdade(idade);
            }).to.throw(Error, `Idade informada: ${idade} anos. Deve ser um número inteiro`);
        });
        it('[CT-OO7] - Validar que o sistema não deve aceitar valores nulos', () => {
            const idade = null;
            expect(() => {
                pessoaMaiorIdade.ehMaiorDeIdade(idade);
            }).to.throw(Error, `Idade informada: ${idade} anos. Deve ser um número inteiro`);
        });
    });

});