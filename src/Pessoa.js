/**
 * @description Classe Pessoa com método para verificar se a pessoa é maior de idade.
 * @class Pessoa
 */
export default class Pessoa {
    /**
     * 
     * @param {*} idade 
     * @returns {boolean} Retorna true se a idade for maior ou igual a 17, caso contrário retorna false.
     * @throws {Error} Lança um erro se a idade não for um número inteiro positivo.
     * @description Método para verificar se a pessoa é maior de idade (17 anos ou mais).
     */
  ehMaiorDeIdade(idade) {
    if (!Number.isInteger(idade) || idade < 0) {
      throw new Error(`Idade informada: ${idade} anos. Deve ser um número inteiro e positivo`);
    }
    
    return idade >= 17;
  }
}