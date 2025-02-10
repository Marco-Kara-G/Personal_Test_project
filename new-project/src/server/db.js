import { PrismaClient } from "@prisma/client"; //importiamo il client di prisma per poterlo utilizzare nel file

//creiamo un'stanza del client di prisma per connetterci al database
const prisma = new PrismaClient();
//esportiamo la nostra istanza per utilizzarla all'interno della nostera app
export { prisma };

//Inseriamo le funzioni CRUD(Create,Read,Update & Delete) per operare sul database tramite prisma

//proviamo una funzione "create" per creare un nuovo utente all'interno della tabella user e la esportinamo
export async function createUser(name, email) {
  //dopo aver passato come parametri i valori di nome e email ritorniamo il metodo create legato alla tabella user per inserire i dati al suo interno
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    //aggiungiamo un console log per verificare la corretta aggiunta del nostro utente
    console.log(`utente aggiunto correttamente alla tabella di riferimento`);
    return newUser;
  } catch (error) {
    //con try e catch verifico e controllo che non ci siano errori durante il processo di aggiunta utente
    console.error(
      `Erroe nella creazine di un nuovo elemento errore:`,
      error.message
    );
  }
}

//proviamo a creare ora una funzione "read" per leggere il contenuto della tabella e farcela stampare come log
export async function readUser() {
  //all'interno di una costante chiamiamo il metodo findMany per restituirci la nostra lista di utenti salvati all'ìinterno della tabella user
  try {
    const users = await prisma.user.findMany();
    //inseriamo un console log per stampare in terminale la lista deglinutenti salvati nella costante users
    console.log(`utenti tabella:`, users);
    return users;
  } catch (error) {
    console.error("errore nella lettura della tabella erroe:", error.message);
  }
}

//passiamo ora a una funzione di tipo "update" per modificare i valori all'interno di un elemtno della tabella user
export async function updateUser(id, newName, newEmail) {
  //in questo caso come riferimento passo l'ìd come parametro per localizzare l'elemento che mi serve e utilizzo il metodo update per modificare i dati di uno specifico utente, dati che passerò come variabile per rendere la funzione universale
  try {
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: { name: newName, email: newEmail },
    });
    //inseriamo un log a conferma dell'avvenuta modifica e stampiamo i valori modificati
    console.log(`dati aggiornati correttamente:`, updatedUser);
    return updatedUser;
  } catch (error) {
    console.error(`impossibile aggioprnare i dati dell'utente`, error.message);
  }
}

//ora lavoriamo con la funzione "delete" per eliminare e rimuove un elemtno dalla nostra tabella user del database
export async function deleteUser(id) {
  //anche in questo caso passo come parametro alla mia funzione un id per localizzare l'elemento che voglio rimuovere
  try {
    await prisma.user.delete({
      where: { id: id },
    });

    //inseriamo un log per confermare che il processo è avvenuto correttamente
    console.log(`utente eliminato correttamente`);
  } catch (error) {
    console.error(`impossibile rimuovere l'elemento`, error.message);
  }
}

// all'occorenza è possibile con il medoto $disconnect chiudere la sessione di prisma e quindi terminare la comunicazione con il database. questa funzoine va utilizzata solo se necessario o rischia di rallentare le operazioni di CRUD con le tabelle di riferimento
