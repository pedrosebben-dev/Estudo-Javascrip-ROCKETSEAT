//Template Literals ( template strings, interpolacao de strings)


let username = "Pedro"
let email = "pedro@gmail.com"


// passar mais de um parâmetro

console.log(username, email, "teste");

// concatenar texto

let message = "ola" + username + "voce conectou com o email" + email

console.log(message);

// Template Literals 

console.log(`ola, ${username}.voce conectou com o email ${email} `);