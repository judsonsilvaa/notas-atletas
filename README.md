# Calculadora de Médias de Atletas

Este projeto tem como objetivo calcular a média das notas de atletas, **desconsiderando a maior e a menor nota**, e exibir o nome do atleta, suas notas ordenadas e a média válida.

## Descrição

A classe `CalculadoraMediasAtletas` recebe um array de objetos representando os atletas e suas respectivas notas. O cálculo da média é feito da seguinte forma:

1. Ordena as notas do atleta em ordem crescente.
2. Elimina a maior e a menor nota.
3. Calcula a média das 3 notas restantes.
4. Exibe o nome do atleta, suas notas ordenadas e a média válida.

Caso algum atleta não tenha exatamente 5 notas, ele será ignorado no processamento.

## Funcionalidade

O código realiza as seguintes tarefas:

1. **Entrada de Dados**: Recebe um array de objetos onde cada objeto contém o nome do atleta e um array de notas.
2. **Processamento**: Para cada atleta, o código:
   - Ordena as notas em ordem crescente.
   - Desconsidera a maior e a menor nota.
   - Calcula a média das 3 notas intermediárias.
   - Exibe o nome do atleta, suas notas e a média válida.
3. **Saída**: Exibe o resultado no console.

## Como Usar

### Instalação

1. Clone este repositório:
    ```bash
    git clone <URL do repositório>
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd <diretório do projeto>
    ```

3. Abra o arquivo `index.js` (ou o arquivo que contém o código).

### Execução

Basta rodar o código JavaScript utilizando o Node.js ou qualquer outro ambiente de execução JavaScript. Para isso, use o comando:

```bash
node index.js
