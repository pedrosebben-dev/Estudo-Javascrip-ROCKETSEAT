// Hoisting: (levantar ou içar) se refere ao comportamento do interpretador de mover as declaraçōes
// de variáveis e funções para o topo do escopo em que foram definidas antes mesmo da execucao do codigo

// Esse comportamento possibilita usar uma variável ou função antes que ela esteja definida

// Hoisting de Variáveis: todas declarações de variáveis são movidas para o topo do seu escopo 
// independentemente de onde tenha sido declarada, ela estara disponível para uso em todo escopo
// onde foi definida


// !!! mesmo que as declarações de variáveis sejam movidas para o topo do escopo elas ainda precisam
// ser declaradas antes de serem utilizadas. Caso contrário, você receberá uma referência indefinida
// (Undefined)

// Hoisting de Funções: todas as declarações de funções também são movidas para o topo do seu escopo. 
// Isso signica que você pode chamar uma funcão antes mesmo de declara-lo.

// Essa caracteristica do Javascript permite que você organize seu codigo de forma mais intuitiva,
// definindo as funções em qualquer ordem que desejar 

