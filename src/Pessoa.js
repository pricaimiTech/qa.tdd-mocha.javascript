// src/Pessoa.js
export default class Pessoa {
  ehMaiorDeIdade(idade) {
    if (typeof idade !== 'number' || idade < 0) {
      throw new Error('Idade deve ser um número positivo');
    }
    
    return idade >= 17;
  }
}