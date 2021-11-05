/* Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
O resultado deve ser armazenado em uma variável. Por exemplo:
let id = generarId()
id vale ~ abc1-bb12-234a-bcc2 */

const createRandomID = () => {
    const randomValues = () => Math.random().toString(16).substr(2, 4);
    
    return randomValues() + '-' + randomValues() + '-' + randomValues();
};

let randomId = createRandomID();

console.log(randomId);