/*Pedro Henrique Mendes De Jesus
3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas. */
console.clear();
var teclado = require("prompt-sync")();
//declarando matriz usando o contrutor Array  limitando a 3 linhas 
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    /* Cria um array vazio para preencher a linha correspondente ao i
    limitando a três linhas */
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        // Atribuicaao via entrada de dados manual na variavel nome  
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "]  \n                da matriz: "));
        // Atribui nome na minhaMatriz do endereço dado por i e j  
        matrizDois[i][j] = nome;
    }
}
// Imprime a matriz  
console.log(matrizDois);