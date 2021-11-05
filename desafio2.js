/* Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções elementares de adição, subtração, multiplicação e divisão.
Leve em consideração que a divisão não deve permitir dividendo 0
A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
Função de multiplicação - Idem
A função de divisão aceita dois parâmetros: a e b.
*/

const operationFunctions = {
    sum: (array) => {
        return array.reduce((acc,curr) => acc + curr);
    },
    sub:(array) => {
        return array.reduce((acc, curr) => acc - curr );
    },
    multi:(array) => {
        return array.reduce((acc,curr) => acc * curr);
    },
    div: (a, b) => {
        if (b === 0) {
        return 'Dividendo não pode ser 0';
    } else return a /b ;
    }
};

// console.log(operationFunctions.sum([1,-2,3,4,5,6]));
// console.log(operationFunctions.sub([8,-5,2]));
// console.log(operationFunctions.multi([1,2,3,4,5,6]));
// console.log(operationFunctions.div(64,8));