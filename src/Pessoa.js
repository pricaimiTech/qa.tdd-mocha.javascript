/**
 * @description Classe Pessoa com método para verificar se a pessoa é maior de idade.
 * @class Pessoa
 */
class Pessoa {

  constructor(idade = null){
    this.idade = idade
    this.IDADE_MINIMO = 18
  }
  
  /**
   * 
   * @param {*} idade 
   * @returns {boolean} Retorna true se a idade for maior ou igual a 17, caso contrário retorna false.
   * @throws {Error} Lança um erro se a idade não for um número inteiro positivo.
   * @description Método para verificar se a pessoa é maior de idade (17 anos ou mais).
   */
  ehMaiorDeIdade(idade) {
    if (idade === null) {
      throw new Error(`Idade informada: ${idade} anos. Deve ser um número inteiro`);
    }
    if (!Number.isInteger(idade)) {
      throw new Error(`Idade informada: ${idade} anos. Deve ser um número inteiro`);
    } else if (idade < 0) {
      throw new Error(`Idade informada: ${idade} anos. Não é permitido idade negativa`);
    }
    return idade >= this.IDADE_MINIMO;
  }
}

module.exports = Pessoa
