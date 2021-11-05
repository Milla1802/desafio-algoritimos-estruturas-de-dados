/* Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]
Obtenha uma array contendo apenas as letras
Obtenha uma array contendo apenas os números
Obtenha o maior número da array acima
*/

const arrayOriginal = ['a', 10, 'b', 'hola', 122, 15];

// Obtenha uma array contendo apenas as letras: 
const getLetters = (array) => {

   const newArray = array.filter((element) => {
       return (typeof element === 'string' && element.length === 1 )
   });

   return newArray;
};

console.log(getLetters(arrayOriginal));

