/* Lösning till Uppgriftt 8. Av Loic Leroy, 2026 */
"use strict";
const book = {
    title: "A little life",
    author: "Hanya Yanagihara",
    year: 2015
};
function printBook(book){
    console.log(`Titel: ${book.title}`);
    console.log(`Förfatattare: ${book.author}`);
    console.log(`Utgivningsår: ${book.year}`);
}
printBook(book);