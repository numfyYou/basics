'use strict';

const phonebook = [
    { "name": "Olena Shevchenko", "phone": "+380503456789" },
    { "name": "Andrii Kovalenko", "phone": "+380673212345" },
    { "name": "Natalia Polishchuk", "phone": "+380991234321" },
    { "name": "Viktoria Ivanenko", "phone": "+380953333222" },
];

const  findPhoneByName = (name) => {
    for(let i = 0; i < phonebook.length; i++){
        if(phonebook[i].name === name) return phonebook[i].phone
    }
};

console.log("Olena's phone is " + findPhoneByName("Olena Shevchenko"));
console.log("Natalia's phone is " + findPhoneByName("Natalia Polishchuk"));
console.log("Viktoria's phone is " + findPhoneByName("Viktoria Ivanenko"));
console.log("Andrii's phone is " + findPhoneByName("Andrii Kovalenko"));
console.log("\n");

const hashPhonebook = {
    "Olena Shevchenko": "+380503456789",
    "Andrii Kovalenko": "+380673212345",
    "Natalia Polishchuk": "+380991234321" ,
    "Viktoria Ivanenko": "+380953333222"
};

const hashFindPhoneByName = (name) => hashPhonebook[name];



console.log("Olena's phone is " + hashFindPhoneByName("Olena Shevchenko"));
console.log("Natalia's phone is " + hashFindPhoneByName("Natalia Polishchuk"));
console.log("Viktoria's phone is " + hashFindPhoneByName("Viktoria Ivanenko"));
console.log("Andrii's phone is " + hashFindPhoneByName("Andrii Kovalenko"));