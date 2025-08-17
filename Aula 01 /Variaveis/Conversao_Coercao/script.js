/*
Conversao de tipos (type casting ou type conversation):
ocorre quando voce explicitamente transforma um valor de um tipo para outro.
Isso é feito de forma consiente, usando funções ou métodos específicos para realizar a conversão.

Coersão de tipos :

acontece de forma automatica (implicitamente). O javascript tenta automaticamente converter um dos valores
para um tipo compatível antes de realizar a operaçao.

*/

console.log(typeof "9");
// nesse caso mostrado acima o tipo Number n se usa "" como foi usado ele deixou de ser Number para a tipagem String

console.log(typeof Number("9"));
// exemplo apenas usado para que seja entendido, mas se agora eu quiser converter a string em Number, tenho que usar 
// Number( e passar aqui o que sera convertido), fazendo assim a string ser convertida a Number

let age = 18
console.lo(typeof age.toString());
// JS nos entrega a forma toString para converter a string de maneira mais fácil 


