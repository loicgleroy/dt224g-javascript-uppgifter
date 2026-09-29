/* Lösning till Uppgriftt 2. Av Loic Leroy, 2026 */
"use strict";
const price = 250;
const quantity = 4;
const total = price * quantity;
const totalWithVat = total * 1.25;
console.log(`Pris: ${price} kr`);
console.log(`Antal: ${quantity}`);
console.log(`Totalt: ${total} kr`);
console.log(`Totalt inklusive moms: ${totalWithVat} kr`);
