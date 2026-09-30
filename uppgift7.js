/* Lösning till Uppgriftt 7. Av Loic Leroy, 2026 */
"use strict";
const numbers = [5, 9, 12, 16, 21, 33];
function sumArray(numbers)
{
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
{sum = sum + numbers[i];}
    return sum;
    }
    console.log(`Summan är ${sumArray(numbers)}`);
