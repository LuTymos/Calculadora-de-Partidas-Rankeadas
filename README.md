# Desafio Calculadora de Partidas Rankeadas

## Descrição do Desafio

Neste projeto, implementei uma lógica que calcula o saldo de vitórias de um jogador e classifica seu nível em partidas ranqueadas com base na quantidade de vitórias. Dependendo do número de vitórias, o jogador receberá uma classificação de nível. O objetivo é praticar conceitos básicos de programação, como variáveis, operadores, estruturas de decisão, laços de repetição e funções.

## Tecnologias Utilizadas

- **JavaScript** (executado via Node.js)
- **Funções**
- **Estruturas de controle** (if-else)
- **Variáveis e Operadores**
- **Laços de repetição** (opcional, se utilizado)

## Estrutura do Código

O código possui uma função `calcularVitorias` que calcula o saldo de vitórias e determina o nível do jogador com base na quantidade de vitórias e derrotas. A lógica de classificação é baseada nas seguintes faixas de vitórias:

- **Vitórias <= 10**: Nível **Ferro**
- **11 <= Vitórias <= 20**: Nível **Bronze**
- **21 <= Vitórias <= 50**: Nível **Prata**
- **51 <= Vitórias <= 80**: Nível **Ouro**
- **81 <= Vitórias <= 90**: Nível **Diamante**
- **91 <= Vitórias <= 100**: Nível **Lendário**
- **Vitórias >= 101**: Nível **Imortal**

## Exemplo de Saída

Para um jogador com **54** vitórias e **2** derrotas, a saída será:

```
O Herói tem de saldo de 52 está no nível de Ouro
```

## Como Executar o Projeto

### Pré-requisitos:

- Certifique-se de ter o **Node.js** instalado em sua máquina. Caso não tenha, você pode [baixá-lo aqui](https://nodejs.org/).

### Clone o Repositório:

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/LuTymos/Calculadora-de-Partidas-Rankeadas.git)
```

### Navegue até o Diretório do Projeto:

```bash
cd Calculadora-de-Partidas-Rankeadas
```

### Execute o Código:

No terminal, execute o seguinte comando:

```bash
node desafio.js
```

### Resultado Esperado:

O terminal exibirá a mensagem correspondente ao saldo de vitórias e ao nível do jogador, conforme seus números de vitórias e derrotas.



**Nota:** Este projeto foi desenvolvido com fins educacionais para praticar conceitos básicos de programação em JavaScript.
