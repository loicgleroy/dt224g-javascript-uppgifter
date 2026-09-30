/* Lösning till Uppgift 9. Av Loic Leroy, 2026 */
"use strict";
const people = [
    { name: "Gabriel", age: 28, city: "Amsterdam"},
    { name: "Mira", age: 43, city: "Paris"},
    { name: "Josefin", age: 13, city: "Stockholm"}
];
function describePerson(person) {
    if (person.age >= 18) {
        console.log(`${person.name} bor i ${person.city} och är myndig.`);
    } else {
        console.log(`${person.name} bor i ${person.city} och är inte myndig.`);
    }
}
for (let i = 0; i < people.length; i++) {
    describePerson(people[i]);
}