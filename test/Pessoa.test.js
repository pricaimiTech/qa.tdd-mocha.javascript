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
    
});