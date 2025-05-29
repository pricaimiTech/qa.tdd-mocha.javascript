# QA TDD Mocha JavaScript

Projeto desenvolvido na prática o conhecimento técnico sobre TDD (Test-Driven Development) na validação de idade para consumo de bebida alcoólica.

## Referência do desafio 
[repositório qa.desafio-tecnico-teorico](https://github.com/qajonatasmartins/qa.desafio-tecnico-teorico.javascript)

## Respostas Teóricas sobre TDD

### 1. Duas Regras Principais do TDD
1. **Não escreva código sem antes ter um teste falhando**: AAo implementar esta abordagem, teremos a garantia da _cobertura de testes_, um desenvolvimento claro _orientado a requisitos_ expressos nos testes, além de garantir o _comportamento esperado_ da aplicação antes mesmo da sua codificação.
2. **Não escreva mais código de teste do que o necessário para fazer o teste falhar**: Garantir que apenas o comportamento do requisito específico esteja sendo testado da forma desejada, além de não antecipar cenários futuros de uma possível implementação.

### 2. Ordem Correta do Ciclo TDD
O ciclo TDD segue o padrão **Red-Green-Refactor**:
1. 🔴 **RED**(vermelho): Antes mesmo de codificar, crie o teste e veja- falhar.
2. 🟢 **GREEN**(verde): Escreva o mínimo de código possível para fazer com que o teste passe 
3. 🔵 **REFACTOR**(refatorar): Agora chegou o momento de evoluir seu código e melhorar a qualidade dele através da estrutura, legibilidade, performance,etc. Mas é claro sem alterar o comportamento e garantindo que os testes continuem passando.

### 3. Três Leis do TDD (Uncle Bob)

Segundo Uncle Bob, as três leis são:
1. **Primeira Lei**: Você não deve escrever código de produção até que tenha escrito um teste unitário que falhe.
2. **Segunda Lei**: Você não deve escrever mais teste unitário do que o suficiente para falhar, e falhas de compilação contam como falhas.
3. **Terceira Lei**: Você não deve escrever mais código de produção do que o suficiente para fazer o teste que está falhando passar.

##  Desafio

### 🎯 Requisitos Funcionais

O Product Owner solicitou a implementação de uma nova regra no sistema para validar se uma pessoa é menor de idade ou não, a fim de determinar se ela pode consumir bebida alcoólica.

Com isso, foram definidos os seguintes requisitos funcionais:

- **RF001**: Pessoas maiores de 17 anos podem consumir bebida alcoólica.
- **RF002**: Pessoas menores de 17 anos não podem consumir bebida alcoólica.

### 🧪 Técnica de Teste Utilizada

#### Partição de Equivalência + Análise de Valor Limite

**Por que esta técnica?**

1. **Partição de Equivalência**: Dividimos os dados de entrada em classes equivalentes:
   - Classe 1: Idades ≥ 18 (pode consumir álcool)
   - Classe 2: Idades < 18 (não pode consumir álcool)
   - Classe 3: Entradas inválidas (negativos, não numéricos)

2. **Análise de Valor Limite**: Testamos os valores nos limites das partições:
   - 17 anos (limite inferior da classe válida)
   - 18 anos (limite superior da classe válida)
   - 0 anos (limite mínimo)

Esta abordagem garante cobertura eficiente com o mínimo de casos de teste necessários.

### 🚀 Configuração e Execução

#### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

#### Arquitetura de Testes
- **Framework**: Mocha
- **Assertions**: Chai
- **Padrão**: TDD (Test-Driven Development)
- **Cobertura**: Todas as partições de equivalência

#### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/qa.tdd-mocha.javascript.git
cd qa.tdd-mocha.javascript

# Instale as dependências
npm install
```

#### Estrutura do Projeto 
```bash
qa.tdd-mocha.javascript/
├── src/
│   └── Pessoa.js          # Classe principal
├── test/
│   └── Pessoa.test.js     # Testes unitários
└── README.md
```