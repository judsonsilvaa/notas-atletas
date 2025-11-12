/* Calcular a média sem considerar a maior e menor nota.
 * Apresentar nome, notas e média.
 */

class CalculadoraMediasAtletas {
  // A classe recebe os dados dos atletas ao ser instanciada
  constructor(atletas) {
    this.atletas = atletas;
  }

  // Processar e exibir os resultados
  processarResultados() {
    // Dica 1: Utiliza o laço `for` para percorrer todos os atletas
    for (let i = 0; i < this.atletas.length; i++) {
      let atleta = this.atletas[i];
      let nome = atleta.nome
      let notas = atleta.notas;

      // Vamos garantir que o atleta tenha exatamente 5 notas para o cálculo.
      if (notas && notas.length === 5) {
        /* Utilizar o método `.sort()` para ordenar.
         * Criar duas versões ordenadas:
         * 1. `notasOrdenadas`: Ordenação numérica (crescente) para o cálculo.
         * 2. `notasOrdenadasExibidas`: Ordenação padrão/string (como na dica e saída do exemplo).
         */
        let notasOrdenadas = [...notas].sort((a, b) => a - b);
        let notasOrdenadasExibidas = [...notas].sort((a, b) => a - b);

        /* Utiliza `.slice(1, 4)` para eliminar a maior e a menor nota.
         * Pegamos os itens dos índices 1, 2 e 3 da lista ordenada numericamente.
         */
        let notasComputadas = notasOrdenadas.slice(1, 4);

        // Utilizar o método `.forEach()` para somar os valores
        let soma = 0;
        notasComputadas.forEach(nota => {
          soma = soma + nota;
        });

        /* Utilizar o `.length` para saber o tamanho da matriz.
         * No cálculo da média `notasComputadas.length` será 3.
         */
        let media = soma / notasComputadas.length;

        console.log(`Atleta: ${nome}`);
        console.log(`Notas Obtidas: ${notasOrdenadasExibidas.join(',')}`);
        console.log(`Média Válida: ${media}`);
        console.log(''); // Adiciona uma linha em branco para separação

      } else {
        console.log(`O atleta ${nome} não possui 5 notas válidas, por isso não pôde ser processado.`);
        console.log(''); // Adiciona uma linha em branco para separação
      }
    }
  }
}

// Entrada do enunciado
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// 1. Instancia a classe com os dados dos atletas
let calculadora = new CalculadoraMediasAtletas(atletas);

// 2. Chama o método para processar e exibir os resultados
calculadora.processarResultados();