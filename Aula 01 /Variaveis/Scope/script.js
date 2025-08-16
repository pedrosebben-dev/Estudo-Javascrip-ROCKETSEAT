console.log(user);
var user = "Rodrigo"

// hoisting na pratica - ele leva a funcao la para o topo como se estivesse declarado assim 

var user = "Rodrigo"
console.log(user);

// scopo global
var email = "pedro@gmail.com"

// escopo de bloco 
{
    console.log(email);
}

var age

{
    var age = 18
}

console.log(age)


// let respeita o scopo onde foi criado, tudo acima funcionaria com var, agora let daria erro

{
    let age = 18
}
console.log(age); 
// assim nao ira funcionar pq o let respeita o scopo onde foi criado

{
    let age = 18
    console.log(age);
}

// se tentar user ele antes também havera problema e notificara erro !!!

{
    console.log(age);
    let age = 18
}
// assim vai apresentar erro no console porque nao pode chamar a funcao antes da declaracao em let 

