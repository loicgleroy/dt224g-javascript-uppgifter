/* Lösning till Uppgriftt 4. Av Loic Leroy, 2026 */
"use strict";
// Skriv ut alla heltal från 1 till 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Skriv ut endast jämna tal mellan 1 och 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}