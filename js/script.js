// Test
// console.log("Ciao");

// Chiediamo all'utente i suoi dati per generare una password

// Blocco raccolta dai dati e info conosciute

// -Con un prompt chiediamo all'utente il suo nome

const userName = prompt ("Ciao! Qual è il tuo nome?"); //string

console.log (userName, typeof userName);

// -Con un prompt chiediamo all'utente il suo cognome

const userSurname = prompt ("Qual è invece il tuo cognome?"); //string

console.log (userSurname, typeof userSurname);

// -Con un prompt chiediamo all'utente il suo colore preferito

const userColor = prompt ("Ora dimmi il tuo colore preferito"); //string

console.log (userColor, typeof userColor);

// -Generiamo un numero casuale da inserire nella password

let userNumber = Math.floor(Math.random() * 100); //string
    //trasformo la stringa in un numero anche se in questo caso non serve
userNumber = parseInt(userNumber); //Number

console.log (userNumber, typeof userNumber);

// Parte logica

// -Transformo le informazioni dell'utente in una password

let userPassword = userName + userSurname + userColor + userNumber;

const result = userPassword.toLowerCase();

console.log (userPassword, typeof userPassword);

//Stampa output 

// -Stampo il risultato della password
//Preparo il messagio da mostrare

const resultMessage = `Ho generato la tua nuova password ed è ${result}! Non condividerla con nessuno!`;

console.log (resultMessage);

// -Stampo il risultato in pagina

document.getElementById("password") .innerHTML = resultMessage;