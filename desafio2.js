/* Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções elementares de adição, subtração, multiplicação e divisão.
Leve em consideração que a divisão não deve permitir dividendo 0
A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
Função de multiplicação - Idem
A função de divisão aceita dois parâmetros: a e b.
*/

const operationFunctions = {
    sum: (array) => {
        return array.reduce((acc,curr) => acc + curr, 0);
    },
    sub:(array) => {
        return array.reduce((acc, curr) => {
            if(acc > curr) return acc - curr;
             else return curr - acc ;
        },0);
    },
    multi:(array) => {
        return array.reduce((acc,curr) => acc * curr);
    },
};

console.log(operationFunctions.sub([2,10,1, 2]));


const subtração = (numeros) => {
    return numeros.reduce((acc, curr) => acc * curr)};

console.log(subtração([10,22, 3]));